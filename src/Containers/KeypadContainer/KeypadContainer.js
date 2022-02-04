import React, {useState} from 'react';
import Keypad from '../../Components/Keypad/Keypad';

export function KeypadContainer() {
const [firstInput, setFirstInput] = useState(0);
const [secondInput, setSecondInput] = useState(0);

const handleInput = (input) => {
  setFirstInput((prev)=> prev + input)
}
return(
  <Keypad />
);

}