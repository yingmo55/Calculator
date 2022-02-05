import React, {useState, useEffect} from 'react';
import Keypad from '../../Components/Keypad/Keypad';

export function KeypadContainer(props) {
const changeDisplay = props.changeDisplay;

const [firstInput, setFirstInput] = useState(0);  // 1
const [secondInput, setSecondInput] = useState(0); // 2

const [currentNumber, setCurrentNumber] = useState(0); // 3
const [isDecimal, setIsDecimal] = useState(false);
const [hasFirstInput, setHasFirstInput] = useState(false);

const reset = () => {
  setFirstInput(0);
  setSecondInput(0);
  setCurrentNumber(0);
  setIsDecimal(false);
  setHasFirstInput(false);
}

const isInput = (input) => {
  if (typeof(input) === 'number') {
    changeNumber(input)
  } else {
    switch(input){
      case 'C':
        reset();
        break;
      case "±":
        setCurrentNumber(-currentNumber);
        setHasFirstInput(true);
        break;
      case "%":
        setCurrentNumber(currentNumber / 100);
        setHasFirstInput(true);
        break;
      default:
        console.log('something went wrong')
    }
    
  }
}

const  changeNumber = (input) => {
  if (currentNumber === 0 ) {
    setCurrentNumber(input) 
  } else {
    setCurrentNumber((prev)=> prev + input.toString())
  }
}

useEffect(()=> {
    changeDisplay(currentNumber)
    setFirstInput(currentNumber);
    console.log(typeof(currentNumber))
  }, 
  [currentNumber])



const testFunc = (input) => {
  console.log("KeyPad Container rendered");
  console.log(`input: ${typeof(input)}`);
  changeDisplay(input);
}

return(
  <Keypad handleChange={isInput}/>
);

}