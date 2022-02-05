import React, {useState} from 'react';
import './App.css';
import Display from '../Display/Display';
import {KeypadContainer} from '../../Containers/KeypadContainer/KeypadContainer';

function App() {
const [display, setDisplay] = useState(0);

const  changeDisplay = (input) => {
  setDisplay(input);
}

    return (
      <div className='app'>
        <div className='mainArea'>
          <Display display={display} />
          <KeypadContainer changeDisplay={changeDisplay} />
         </div>
      </div>
    )
}


export default App;
