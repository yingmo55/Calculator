import React, {useState} from 'react';
import './App.css';
import Display from '../Display/Display';
import {KeypadContainer} from '../../Containers/KeypadContainer/KeypadContainer';
import Footer from '../Footer/Footer';

function App() {
const [display, setDisplay] = useState(0);
const [operationKey, setOperationKey] = useState("");

const handleChangeOperationKey = (key) => {
  setOperationKey(key);
}

const  changeDisplay = (input) => {
  setDisplay(input);
}


    return (
      <div className='app'>
        <div className='mainArea'>
          <Display display={display} operationKey={operationKey}/>
          <KeypadContainer changeDisplay={changeDisplay} handleChangeOperationKey={handleChangeOperationKey}/>
        </div>
         <Footer />
      </div>
    )
}


export default App;
