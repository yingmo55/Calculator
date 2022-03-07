import React, {useState, useEffect} from 'react';
import Keypad from '../../Components/Keypad/Keypad';

const operatonKeys = ['+', '-', '*', '/']
const operations = {
  "+": function(first, second) {return first + second},
  "-": function(first, second) {return first - second},
  "*": function(first, second) {return first * second},
  "/": function(first, second) {return first / second}
}

export function KeypadContainer(props) {
const changeDisplay = props.changeDisplay;
const handleChangeOperationKey = props.handleChangeOperationKey

const [firstInput, setFirstInput] = useState(0);
const [secondInput, setSecondInput] = useState(0);
const [operator, setOperator] = useState('');
const [currentNumber, setCurrentNumber] = useState(0);
const [isDecimal, setIsDecimal] = useState(false);
const [hasFirstInput, setHasFirstInput] = useState(false);
const [isFirstNumber, setIsFirstNumber] = useState(true);
const [isSecondNumber, setIsSecondNumber] = useState(false);

const reset = () => {
  setFirstInput(0);
  setSecondInput(0);
  setCurrentNumber(0);
  setOperator('');
  setIsDecimal(false);
  setHasFirstInput(false);
  setIsFirstNumber(true);
  setIsSecondNumber(false);
}

const operationFunction = () => {
  setHasFirstInput(false);
  let result = operations[operator](firstInput, secondInput)
  setCurrentNumber(result);
  setIsFirstNumber(true);
  setTimeout(()=>setHasFirstInput(true), 0)
  setIsSecondNumber(false);
}

const specialOperator = input => {
  const plusPercentage = input => 
  { input === "±" ? setCurrentNumber(-currentNumber) : setCurrentNumber(currentNumber / 100);}
  if (isSecondNumber) {
      plusPercentage(input)
  } else {
      setHasFirstInput(false);
      plusPercentage(input);
      setOperator('');
      setIsFirstNumber(true);
      setTimeout(()=>setHasFirstInput(true), 0);
  }
}

const isInput = (input) => {
  if (typeof(input) === 'number') {
    changeNumber(input)
  } else if (operatonKeys.includes(input)) {
    if(!hasFirstInput || !operator){
      setOperator(input);
      setIsFirstNumber(true);
      setHasFirstInput(true);
    } else {
      !isSecondNumber? setOperator(input) : operationFunction();
    }

    // update operation key since it contains operationKeys
    handleChangeOperationKey(input);
  } else {

    // clear operation key since it doesn't contain operationKeys
    handleChangeOperationKey("");

    switch(input){
      case 'C':
        reset();
        break;
      case "±":
        specialOperator(input);
        break;
      case "%":
        specialOperator(input);
        break;
      case ".":
        if (!isDecimal){
          setCurrentNumber((prev)=> prev + input.toString());
          setIsFirstNumber(false)
          setIsDecimal(true);
      }
        break;
      case "=":
        if(operator && hasFirstInput) {
          return operationFunction();
        }
        let current = currentNumber;
        reset();
        setCurrentNumber(current);
        setFirstInput(parseFloat(current));
        break;
      default:
        console.log('something went wrong')
    }
  }
}

const  changeNumber = (input) => {
  if (currentNumber === 0 || isFirstNumber) {
    setCurrentNumber(input)
    setIsFirstNumber(false)
    if(hasFirstInput){
      setIsSecondNumber(true)
    }
  } else {
    setCurrentNumber((prev)=> prev + input.toString())
  }
}

useEffect(()=> {
    changeDisplay(currentNumber);
    !hasFirstInput ?setFirstInput(parseFloat(currentNumber)) : setSecondInput(parseFloat(currentNumber));
  }, [currentNumber, isSecondNumber]) // eslint-disable-line react-hooks/exhaustive-deps

return(
  <Keypad handleChange={isInput}/>
);
}
