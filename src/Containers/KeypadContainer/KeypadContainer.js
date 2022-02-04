import React, {useState} from 'react';
import Keypad from '../../Components/Keypad/Keypad';

export function KeypadContainer(props) {
const changeDisplay = props.changeDisplay;

const [firstInput, setFirstInput] = useState(0);
const [secondInput, setSecondInput] = useState(0);

const testFunc = (input) => {
  console.log("KeyPad Container rendered");
  console.log(`input: ${input}`);
  changeDisplay(input);
}

return(
  <Keypad handleChange={testFunc}/>
);

}