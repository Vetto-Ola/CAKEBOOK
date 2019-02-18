import React from 'react';
import Ingredient from '../components/ingredient';
import OpenCreateIngredienteButton from '../components/create_ingredient_button';
import './ingredient_source.css'
import SeachContainer from './search_container';


function IngredientSource(props) {
    return(
        <div className="IngredientSource">
            <div className="BlankBar">
                {props.children}
                <OpenCreateIngredienteButton buttonName={props.buttonName}
                    handleOpenPopUp={props.handleOpenPopUp}
                />
            </div>
            <h1>Resultados</h1>
            {
                props.search && 
                props.search.map((item) => {
                    return <Ingredient 
                            handleUpdateIngredientClick={props.handleUpdateIngredientClick}
                            handleIngredientDelete={props.handleIngredientDelete}
                            {...item}
                            key={item.url}
                            />
                })
            }
            <h1>{props.titulo}</h1>
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