import React from 'react';
import Ingredient from '../components/ingredient';
import './ingredient_source.css'


function IngredientSource(props) {
    return(
        <div className="IngredientSource">
            {props.children}
            <div className="BlankBar"></div>
            <h1>Lista De Ingredientes</h1>
            {
                props.ingredients &&
                props.ingredients.map((item) => {
                    return <Ingredient {...item} key={item.url}/>
                })
            }
        </div>
    )
}

export default IngredientSource;