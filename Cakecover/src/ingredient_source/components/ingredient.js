import React from 'react';
import PropTypes from 'prop-types';
import './ingredient.css'

function Ingredient(props){
    return(
        <div className="Ingredient">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

Ingredient.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Ingredient;