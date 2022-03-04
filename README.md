# Calculator
![Calculator app screenshot](./readme-asset/calculator-sc.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cd6c4036-10f3-4840-a388-4938b546fa05/deploy-status)](https://app.netlify.com/sites/calculator-96fecd/deploys) | 🔗[See it live here](https://calculator-96fecd.netlify.app/)

# Table of Content
- [General Information](#general-info)  
  + [Languages/Framework](#languagesframework)  
  + [Setup / Instruction](#setupinstruction)  
- [About](#about)
  + [Challenges](#challenges)
- [Roadmap](#roadmap)
- [Bugs](#bugs)
- [Change Logs](#change-logs)

<br />
 
## General Info 

This is a calculator app with basic calculating features:
+ operations 
  + plus, minus, multiply, divide
  + plus/minus ±
  + percentage %

### Languages/Framework
+ React
  + functional components
  + useState and useEffect hooks
+ CSS: styling

## Setup/Instruction
+ To run it live: https://calculator-96fecd.netlify.app/

+ To run it locally in developer build:  
  + Make sure you have npm installed
  + Navigate to the root folder in the terminal
  + Run the following command  `npm start` in the terminal
<hr />

## About

I built this project to deepen my knowledge of React. I made it on top of my previous attempt on a React calculator. I reused some components (keypad, button, display) and rewrote the logic using functional components and effect hooks such as state and effect instead of class components.

Some React caltulators use `eval()` for calculation. I decided against it because of [security concerns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).  

### Challenges
The initial release has a bug that inputting the same number for the operation (e.g. 2 + 2) does not work due to an oversight from how I set up the effect hook. I solved it by adding another boolean state for the 2nd number input.
~~Currently, the calculator may not work as expected when you chain multiple inputs together after using the "=" key. I am looking to refactor this function in the future.~~ This was fixed on 3/1/22 by changing a Boolean value that checks if a second input exists.


<hr />

## Roadmap
- [x] Adjust style
- [ ] fix known bugs (Partially done - 3/1/22)
- [x] Add and change operator key display on display
- [ ] refactor the code and logic

## Bugs
Known bug(s):  
+ display may not work properly if users input larger digits of number.
+ ~~operations may not work properly when chaining multiple operations~~ *fixed on 3/1/22*

Please report bugs and how they occur if you encounter any.

## Change Logs
### 3/1/22
- Fix bugs when operation does not work properly after using "="
- Fix bugs of unintended behaviors when chaining multiple operations
- Add operator key display in display
- Adjust font size for number in display
- Fix typos and update README.md

### 2/16/22
+ Adjust style for buttons

### 2/5/22
+ Finish prototype
+ Push to GitHub
