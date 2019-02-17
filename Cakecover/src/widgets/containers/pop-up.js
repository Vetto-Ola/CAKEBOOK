import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class PopUp extends Component{
    render(){
        return createPortal(
            this.props.children,
            document.getElementById('pop-up')
        )
    }
}

export default PopUp;