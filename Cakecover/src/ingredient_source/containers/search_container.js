import React, { Component } from 'react';
import SearchIngredient from '../components/search_ingredient';

class SearchContainer extends Component {
    render(){
        return(
            <SearchIngredient 
                setRef={this.setInputIngredientRef}
                handleSumbit={this.handleSumbit}
            />
        )
    }
}

export default SearchContainer;