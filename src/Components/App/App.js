import React, {useState} from 'react';
import './App.css';
import Display from '../Display/Display';
import {KeypadContainer} from '../../Containers/KeypadContainer/KeypadContainer';

function App() {
const [display, setDisplay] = useState(0);
const [operation, setOperation] = useState('');

const  changeDisplay = (input) => {
  setDisplay(input);
}

const changeOperation = (input) => {
  setOperation(input);
}

    return (
      <div className='app'>
        <div className='mainArea'>
          <Display display={display} 
                   operation={operation} />
          <KeypadContainer changeDisplay={changeDisplay} 
                           changeOperation={changeOperation}/>
         </div>
      </div>
    )
}


export default App;
