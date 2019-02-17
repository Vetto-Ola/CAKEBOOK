import React, { Component } from 'react';
import HomeLayout from '../components/home_layout';
import IngredientSource from 
        '../../ingredient_source/containers/ingredient_source';
import Related from '../components/related';
import PopUpContainer from '../../widgets/containers/pop-up';
import PopUp from '../../widgets/components/pop-up';
import OpenCreateIngredienteButton from 
        '../../ingredient_source/components/create_ingredient_button';

import axios from 'axios';

class Home extends Component{
    state = {
        popupVisible: false,
        ingredients: [],
        name: '',
        description: '',
    }
    // Resquest to get all data we need to show. Ingredients information.
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/ingredient/`).then(result => {
            this.setState({
                ingredients: result.data.results
            })
            // console.log(this.state.ingredients);
        })
    }

    handleOpenClickPopUp = (event) => {
        this.setState({
            popupVisible: true,
        })
    }

    handleCloseClickPopUp = (event) => {
        this.setState({
            popupVisible: false,
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
    
    handleSumbitNewIngredient = (evet) => {
        event.preventDefault();
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
                popupVisible: false,
                name: '',
                description: '',
            })
        });
    }

    render(){
        return(
            <HomeLayout>
                <Related/>
                <IngredientSource ingredients={this.state.ingredients}>
                    <OpenCreateIngredienteButton 
                    handleOpenPopUp={this.handleOpenClickPopUp}
                    />
                </IngredientSource>
                {
                    this.state.popupVisible &&
                    <PopUpContainer>
                        <PopUp 
                            handleOnChangeInputText={this.handleChangeInputText}
                            handleOnChangeInputTextArea={this.handleChangeInputTextArea}
                            handleSumbitNewIngredient={this.handleSumbitNewIngredient}
                            handleCloseClick={this.handleCloseClickPopUp}
                        />
                    </PopUpContainer>
                }
            </HomeLayout>
        )
    }
}

export default Home;