import React from 'react';
import './Button.css';

function Button(props) {
    const handleChange = props.onClick;
    const numbers = Array.from('1234567890');
    const operators = Array.from('+-*/.');

    //HANDLE VALIDATED INPUT
    const handleInput = (input) => {
        if(numbers.includes(input)){
            return handleChange(parseInt(input));
        }
        if(operators.includes(input)){
            return handleChange(input);
        }
        if(input === 'Enter'){
            return handleChange('=');
        }else{
            const value = props.value;
            handleChange(value);
        }
    }

    document.onkeydown = function(e){
        if(numbers.includes(e.key) ||
           operators.includes(e.key) ||
           e.key === 'Enter'){
               handleInput(e.key)
           }
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
