import React from 'react';
import Ingredient from '../components/ingredient';
import OpenCreateIngredienteButton from '../components/create_ingredient_button';
import './ingredient_source.css'


function IngredientSource(props) {
    return(
        <div className="IngredientSource">
            <div className="BlankBar">
                <OpenCreateIngredienteButton 
                    handleOpenPopUp={props.handleOpenPopUp}
                />
            </div>
            <h1>Lista De Ingredientes</h1>
            {
                props.ingredients && 
                props.ingredients.map((item) => {
                    return <Ingredient 
                            handleUpdateIngredientClick={props.handleUpdateIngredientClick}
                            handleIngredientDelete={props.handleIngredientDelete}
                            {...item}
                            key={item.url}
                            />
                })
            }
        </div>
    )
}

export default IngredientSource;