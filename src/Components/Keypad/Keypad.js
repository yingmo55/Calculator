import React from 'react';
import Button from '../Button/Button';
import './Keypad.css';

function Keypad(props) {


    return(
        <div className='keypad' >
            <Button value='C' className='function' />
            <Button value='±' className='function' />
            <Button value='%' className='function' />
            <Button value='/' className='operation'/>
            <Button value='7' />
            <Button value='8' />
            <Button value='9' />
            <Button value='*' className='operation' />
            <Button value='4' />
            <Button value='5' />
            <Button value='6' />
            <Button value='-' className='operation' />
            <Button value='1' />
            <Button value='2' />
            <Button value='3' />
            <Button value='+' className='operation' />
            <Button id='zero' value='0' />
            <Button value='.' />
            <Button value='=' className='operation' />
        </div>
    );
}

export default Keypad