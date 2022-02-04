import React from 'react';
import './Button.css';

function Button(props) {
    const testFunction = props.onClick;

    const handleInput = () => {
        const value = props.value;
        testFunction(value)
    }

    return (
        <button type='button' 
        className={props.className}
        id={props.id} 
        onClick={handleInput}
        value={props.value}
        >{props.value}</button>
    );
}

export default Button;
