import React from 'react';
import './Button.css';

function Button(props) {
    const testFunction = props.onClick;

    //HANDLE VALIDATED INPUT
    const handleInput = (input) => {
        console.log(input)
        if(input === '1' ||
        input === '2' ||
        input === '3' ||
        input === '4' ||
        input === '5' ||
        input === '6' ||
        input === '7' ||
        input === '8' ||
        input === '9' ||
        input === '0'){
            testFunction(parseInt(input));
        }else if(input === '+' ||
        input === '-' ||
        input === '/' ||
        input === '*'){
            testFunction(input);
        }else if(input === 'Enter'){
            testFunction('=');
        }else{
            const value = props.value;
            testFunction(value)
        }
    }

    //VALIDATE INPUT
    document.onkeydown = function (e){
        console.log(e.key)
        if(e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '0' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*' ||
        e.key === '/' || 
        e.key === 'Enter'){
            handleInput(e.key);
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
