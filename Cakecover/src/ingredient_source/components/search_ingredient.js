import React from 'react';
import './search_ingredient.css';

const SearchIngredient = (props) => (
    <form 
        className="SearchLayout" 
        onSubmit={props.handleSearchSumbit}
        autoComplete="off"
    >
        <input 
            ref={props.setInputSearchIngredientRef}
            type="text" 
            className="Input"
            placeholder="¡Busca tu delicioso ingrediente!" 
            required="required"
            name="search"/>
    </form>
 )

export default SearchIngredient;