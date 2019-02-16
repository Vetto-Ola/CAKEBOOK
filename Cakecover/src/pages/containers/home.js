import React, { Component } from 'react';
import HomeLayout from '../components/home_layout';
import IngredientSource from '../../ingredient_source/containers/ingredient_source';

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <IngredientSource ingredients={this.props.data.results}/>
            </HomeLayout>
        )
    }
}

export default Home;