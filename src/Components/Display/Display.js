import React from 'react';
import './Display.css';

function Display(props) {

    let display = props.display;
    let operation = props.operation;
    return(
        <div className='display'>
            <p>{operation}</p>
            <p>{display} </p>
        </div>
    );
}

export default Display