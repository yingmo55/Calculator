import React, {useState} from 'react';
import Keypad from '../../Components/Keypad/Keypad';

export function KeypadContainer() {
const [firstInput, setFirstInput] = useState(0);
const [secondInput, setSecondInput] = useState(0);

return(
  <Keypad />
);

}