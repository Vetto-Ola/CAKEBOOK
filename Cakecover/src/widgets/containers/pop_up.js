import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class PopUpToCreate extends Component{
    render(){
        return createPortal(
            this.props.children,
            document.getElementById('pop-up')
        )
    }
}

export default PopUpToCreate;