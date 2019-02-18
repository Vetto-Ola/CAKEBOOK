import React from 'react';
import logo from '../../../images/logocool.jpg';
import logo2 from '../../../images/logo.jpg';
import './related.css';

function Related(props){
    return(
        <div className="Related">
            <img src={logo2}/>
            <h1><a href="./index.html">Ir a ingredientes --></a></h1>
        </div>
    )
}

export default Related;