import React, {useState} from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

function App() {
const [display, setDisplay] = useState('0');
    return (
      <div className='app'>
        <div className='mainArea'>
          <Display />
          <Keypad />
         </div>
      </div>
    )
}


export default App;
