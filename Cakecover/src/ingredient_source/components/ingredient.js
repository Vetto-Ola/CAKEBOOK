import React from 'react';
import PropTypes from 'prop-types';
import './ingredient.css'

function Ingredient(props){
    return(
        <div className="Ingredient">
            <h4 className="LEFT">{props.name}</h4>
            <h4 className="RIGTH">
                <button 
                    id={props.url}
                    className="DELETE"
                    onClick={props.handleIngredientDelete}
                >
                    Eliminar
                </button>
                <button 
                    id={props.url}
                    className="POST"
                    onClick={props.handleUpdateIngredientClick}
                >
                    Editar
                </button>
            </h4>
            {/* <p id={props.url}>{props.description}</p> */}
        </div>
    )
}

Ingredient.propTypes = {
    handleUpdateIngredientClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Ingredient;