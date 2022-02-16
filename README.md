# Calculator
[![Netlify Status](https://api.netlify.com/api/v1/badges/cd6c4036-10f3-4840-a388-4938b546fa05/deploy-status)](https://app.netlify.com/sites/calculator-96fecd/deploys) | 🔗 [See it live here](https://calculator-96fecd.netlify.app/)

<<<<<<< HEAD

![Calculator app screenshot](./readme-asset/calculator-sc.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cd6c4036-10f3-4840-a388-4938b546fa05/deploy-status)](https://app.netlify.com/sites/calculator-96fecd/deploys) | 🔗 [See it live here](https://calculator-96fecd.netlify.app/)



# Table of Content
- [General Information](#general-info)  
   - [Languages/Framework](#languagesframework)
   - [Setup / Instruction](#setupinstruction)
- [About](#about)
  - [Challenges](#challenges)
- [Roadmap](#roadmap)
- [Bugs](#bugs)
- [Change Logs](#change-logs)

<br />
 
## General Info 

This is a calculator app with basic caltulating features:
+ operations 
  + plus, minus, multiply, divide
  + plus/minus ±
  + percentage %

### Languages/Framework
+ React
  +  functional components
  +  useState and useEffect hooks
+ CSS: styling

## Setup/Instruction
+ To run it live: https://calculator-96fecd.netlify.app/

+ To run it locally in developer build:
  + Make sure you have npm installed
  + Navigate to the root folder in the terminal
  + Run the following command  
    ``` npm start ```
<hr />

## About

I built this project to deepen my knowledge of React.js. I made it on top of my previous attempt at creating a calculator. I reused some components (keypad, button, display) and rewrote the logic using functional components and effect hooks such as state and effect.  

Some React caltulators use `eval()` for operation. I decided against it because of [security concerns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).  

### Challenges
The initial release has a bug that inputting the same number for the operation (e.g. 2 + 2) does not work due to an oversight from how I set up the effect hook. I solved it by adding another boolean state for the 2nd number input.
Currently, the calculator may not work as expected when you chain multiple inputs together after using the "=" key. I am looking to refactor this function in the future.

<hr />
=======
This is a calculator app with basic caltulating features.  

I built this project to deepen my knowledge of React.js. I made it on top of my previous attempt at creating a calculator. I reused some components (keypad, button, display) and rewrote the logic using functional components and effect hooks such as state and effect.  

Some React caltulators use `eval()` for operation. I decided against it because of [security concerns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).  

## Challenges
The initial release has a bug that inputting the same number for the operation (e.g. 2 + 2) does not work due to an oversight from how I set up the effect hook. I solved it by adding another boolean state for the 2nd number input.
Currently, the calculator may not work as expected when you chain multiple inputs together after using the "=" key. I am looking to refactor this function in the future.

## languages/framework
+ React
  +  functional components
  +  useState and useEffect hooks
+ CSS for styling
>>>>>>> daa811b (update README.md)

## Roadmap
- [x] Adjust style
- [ ] fix known bugs
- [ ] Add and change operator key display on display
- [ ] refactor the code and logics


## Bugs
Known bug(s):  
+ display may not work properly if users input larger digits of number.
+ operations may not work properly when chaining multiple operations

Please report bugs and how they occur if you encounter any.

## Change Logs
### 2/16/22
+ Adjust style for buttons

### 2/5/22
+ Finish prototype
+ Push to GitHub