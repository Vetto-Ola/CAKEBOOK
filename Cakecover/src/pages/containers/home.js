import React, { Component } from 'react';
import HomeLayout from '../components/home_layout';
import IngredientSource from '../../ingredient_source/containers/ingredient_source';
import axios from 'axios';

class Home extends Component{
    state = {
        ingredients: [],
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/ingredient/`).then(result => {
            this.setState({
                ingredients: result.data.results
            })
        })
    }
    render(){
        return(
            <HomeLayout>
                <IngredientSource ingredients={this.state.ingredients}/>
            </HomeLayout>
        )
    }
}

export default Home;