import React from 'react';
import PropTypes from 'prop-types';

function CreateIngredientButton(props){
    return(
        <button onClick={props.handleOpenPopUp}>AGREGAR UN INGREDIENTE</button>
    )
}

CreateIngredientButton.propTypes = {
    handleOpenPopUp: PropTypes.func.isRequired,
}

export default CreateIngredientButton;