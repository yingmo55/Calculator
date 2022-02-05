import React, {useState} from 'react';
import Button from '../Button/Button';
import './Keypad.css';

function Keypad(props) {

const handleChange = props.handleChange;

const handleInput = () => {
    handleChange()
}

const buttons = 
    [['C', '±', '%', '/'],
     [7, 8, 9, '*'],
     [4, 5, 6, '-'],
     [1, 2, 3, '+'],
     [0, '.', '=']]

const buttonsRender = buttons.map((row, index) => 
    row.map((item, index2) => 
    <Button value={item} 
            className={typeof(item) === 'number' ? 'number' : 'operation'}
            id={item === 0 ? 'zero': "key" + index + index2}
            key={"key" +index+index2}
            onClick={handleChange}
    />
    )
    )

    return(
        <div className='keypad' >
            {buttonsRender}
        </div>
    );
}

export default Keypad