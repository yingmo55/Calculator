import React from 'react';
import './Display.css';

function Display(props) {

    let display = props.display;
    return(
        <div className='display'>
            <p></p>
            <p>{display} </p>
        </div>
    );
}

export default Display