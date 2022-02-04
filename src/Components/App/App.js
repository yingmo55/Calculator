import React, {useState} from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const operationKey = {
  "=": 0,
  "+": function(first, second) {return first + second},
  "-": function(first, second) {return first - second},
  "*": function(first, second) {return first * second},
  "/": function(first, second) {return first / second},
  "%": function(number) {return number / 100},
  '±': function(number) {return -number},
}

function App() {
  const [firstInput, setFirstInput] = useState(0);

  const [secondInput, setSecondInput] = useState(0);

  const handleInput = (input) => {
    setFirstInput((prev)=> prev + input)
  }

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
