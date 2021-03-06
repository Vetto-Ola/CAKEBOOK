import React, { Component } from 'react';
import HomeLayout from '../components/home_layout';
import IngredientSource from
    '../../ingredient_source/containers/ingredient_source';
import Related from '../components/related';
import PopUpContainer from '../../widgets/containers/pop_up';
import PopUpToCreate from '../../widgets/components/pop_up_create';
import PopUpToUpdate from '../../widgets/components/pop_up_update';
import SeachIngredient from '../../ingredient_source/components/search_ingredient'
import { connect } from 'react-redux';
import * as actions from '../../actions/ingredients/index';
import { bindActionCreators } from 'redux';

import axios from 'axios';

class Home extends Component {
    state = {
        popUpToEdit: false,
        url: '',
        name: '',
        description: '',
    }
    // Resquest to get all data we need to show. Ingredients information.
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/ingredient/`)
            .then(result => {
                this.props.actions.showIngredients(result.data.results)
            })
    }

    handleOpenClickPopUp = (event) => {
        this.props.actions.openCreate()
    }

    handleCloseClickPopUp = (event) => {
        this.props.actions.closeCreate()
    }

    handleChangeInputText = (evet) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeInputTextArea = (evet) => {
        this.setState({
            description: event.target.value
        })
    }

    handleUpdateIngredientClick = (event) => {
        axios.get(event.target.id)
            .then(result => {
                this.setState({
                    url: result.data.url,
                    name: result.data.name,
                    description: result.data.description,
                    popUpToEdit: true,
                })
                this.props.actions.openUpdate()
            })
    }

    handlePutUpdateIngredientClick = (event) => {
        // event.preventDefault();
        const updateIngredient = {
            name: this.state.name,
            description: this.state.description
        }
        axios.put(this.state.url, updateIngredient)
            .then(result => {
                this.setState({
                    name: '',
                    description: '',
                    url: '',
                })
            });
    }

    handleUpdateCloseClickPopUp = (event) => {
        this.setState({
            popUpToEdit: false,
            url: '',
            name: '',
            description: '',
        })
        this.props.actions.closeUpdate()
    }

    handleIngredientDelete = (event) => {
        console.log(event.target.id);
        if (confirm("¿Seguro de que quiere eliminarlo?")) {
            axios.delete(event.target.id).then(
                location.reload()
            )
        }
    }

    handleSumbitNewIngredient = (evet) => {
        // event.preventDefault();
        const newIngredient = {
            name: this.state.name,
            description: this.state.description
        }
        console.log(newIngredient);
        axios.post(`http://127.0.0.1:8000/ingredient/`, newIngredient)
            .then(result => {
                console.log(result);
                console.log(result.data);
                this.setState({
                    popUpToCreate: false,
                    name: '',
                    description: '',
                })
            });
    }

    handleSearchSumbit = event => {
        event.preventDefault();
        const text = this.input.value.replace(' ','+')
        axios.get(`http://127.0.0.1:8000/ingredient/?contains=${text}`)
            .then(result => {
                this.props.actions.showSearchResult(result.data.results)
            })
    }
    setInputSearchIngredientRef = element => {
        this.input = element;
    }

    render() {
        return (
            <HomeLayout>
                <Related />
                <IngredientSource
                    buttonName="AGREGAR INGREDIENTE"
                    titulo="INGREDIENTES"
                    search={this.props.searchResults}
                    ingredients={this.props.ingredientList}
                    handleIngredientClick={this.handleUpdateIngredientClick}
                    handleIngredientDelete={this.handleIngredientDelete}
                    handleOpenPopUp={this.handleOpenClickPopUp}
                    handleUpdateIngredientClick={this.handleUpdateIngredientClick}
                >
                    <SeachIngredient
                        handleSearchSumbit={this.handleSearchSumbit}
                        setInputSearchIngredientRef={this.setInputSearchIngredientRef}
                    />
                </IngredientSource>
                {
                    this.props.createPopUpVisible &&
                    <PopUpContainer>
                        <PopUpToCreate
                            handleOnChangeInputText={this.handleChangeInputText}
                            handleOnChangeInputTextArea={this.handleChangeInputTextArea}
                            handleSumbitNewIngredient={this.handleSumbitNewIngredient}
                            handleCloseClick={this.handleCloseClickPopUp}
                        />
                    </PopUpContainer>
                }
                {
                    this.props.updatePopUpVisible &&
                    <PopUpContainer>
                        <PopUpToUpdate
                            handleOnChangeInputText={this.handleChangeInputText}
                            handleOnChangeInputTextArea={this.handleChangeInputTextArea}
                            handlePutUpdateIngredientClick={this.handlePutUpdateIngredientClick}
                            handleCloseClick={this.handleUpdateCloseClickPopUp}
                            name={this.state.name}
                            description={this.state.description}
                        />
                    </PopUpContainer>
                }
            </HomeLayout>
        )
    }
}

function mapStateToProps(state, props){
    return{
        searchResults: state.searchResults,
        ingredientList: state.ingredientList,
        createPopUpVisible: state.createPopUpVisible,
        updatePopUpVisible: state.updatePopUpVisible,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);