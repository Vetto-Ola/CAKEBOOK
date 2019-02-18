import React, { Component } from 'react';
import HomeLayout from '../components/home_layout';
import IngredientSource from 
        '../../ingredient_source/containers/ingredient_source';
import Related from '../components/related';
import PopUpContainer from '../../widgets/containers/pop_up';
import PopUpToCreate from '../../widgets/components/pop_up_create';
import PopUpToUpdate from '../../widgets/components/pop_up_update';

import axios from 'axios';

class Home extends Component{
    state = {
        popUpToCreate: false,
        popUpToEdit: false,
        ingredients: [],
        url: '',
        name: '',
        description: '',
    }
    // Resquest to get all data we need to show. Ingredients information.
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/ingredient/`)
            .then(result => {
            this.setState({
                ingredients: result.data.results
            })
            // console.log(this.state.ingredients);
        })
    }

    handleOpenClickPopUp = (event) => {
        this.setState({
            popUpToCreate: true,
        })
    }

    handleCloseClickPopUp = (event) => {
        this.setState({
            popUpToCreate: false,
        })
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
        })
    }

    handlePutUpdateIngredientClick = (event) => {
        const updateIngredient = {
            name: this.state.name,
            description: this.state.description
        }
        axios.put(this.state.url, updateIngredient)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.setState({
                popUpToEdit: false,
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

    render(){
        return(
            <HomeLayout>
                <Related/>
                <IngredientSource 
                    ingredients={this.state.ingredients}
                    handleIngredientClick={this.handleUpdateIngredientClick}
                    handleIngredientDelete={this.handleIngredientDelete}
                    handleOpenPopUp={this.handleOpenClickPopUp}
                    handleUpdateIngredientClick={this.handleUpdateIngredientClick}
                >
                </IngredientSource>
                {
                    this.state.popUpToCreate &&
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
                    this.state.popUpToEdit &&
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

export default Home;