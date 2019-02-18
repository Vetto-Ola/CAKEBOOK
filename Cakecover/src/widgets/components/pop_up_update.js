import React from 'react';
import './pop_up.css';

function PopUp(props){
    return(
        <div className="PopUp">
            <h3>Editar Ingrediente</h3>
            <form onSubmit={props.handlePutUpdateIngredientClick} autoComplete="Off">
                <div>
                    <label>Nombre del ingrediente:</label>
                </div>
                    <input type="text" name="name" required="required"
                    onChange={props.handleOnChangeInputText} value={props.name}
                    />
                <div>
                    <label>Descripcion del ingrediente:</label>
                </div>
                    <textarea value={props.description}
                    onChange={props.handleOnChangeInputTextArea}
                    />
                <div>
                    <button className="Add" type="sumbit">Guardar</button>
                </div>
            </form>
            <button onClick={props.handleCloseClick} className="PopUp-close"/>
        </div>
    )
}

export default PopUp;