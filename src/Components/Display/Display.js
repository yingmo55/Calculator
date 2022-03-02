import React from 'react';
import './Display.css';

function Display(props) {

    const display = props.display;
    const operationKey = props.operationKey;

    return(
        <div className='display'>
            <p>{operationKey}</p>
            <p>{display}</p>
        </div>
    );
}

export default Display