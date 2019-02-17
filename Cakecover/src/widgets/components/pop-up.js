import React from 'react';
import './pop-up.css';

function PopUp(props){
    return(
        <div className="PopUp">
            <h3>Agregar Ingrediente</h3>
            <form onSubmit={props.handleSumbitNewIngredient}>
                <div>
                    <label>Nombre del ingrediente:</label>
                </div>
                    <input type="text" name="name" required="required"
                    onChange={props.handleOnChangeInputText}
                    />
                <div>
                    <label>Descripcion del ingrediente:</label>
                </div>
                    <textarea 
                    onChange={props.handleOnChangeInputTextArea}
                    />
                <div>
                    <button type="sumbit">Crear</button>    
                </div>
            </form>
            <button onClick={props.handleCloseClick} className="PopUp-close"/>
        </div>
    )
}

export default PopUp;