import React from 'react';
import PropTypes from 'prop-types';

function CreateIngredientButton(props){
    return(
        <button onClick={props.handleOpenPopUp}>{props.buttonName}</button>
    )
}

CreateIngredientButton.propTypes = {
    handleOpenPopUp: PropTypes.func.isRequired,
}

export default CreateIngredientButton;