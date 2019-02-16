import React from 'react';
import Ingredient from '../components/ingredient';


function IngredientSource(props) {
    return(
        <div>
            {
                props.ingredients.map((item) => {
                    return <Ingredient {...item} key={item.url}/>
                })
            }
        </div>
    )
}

export default IngredientSource;