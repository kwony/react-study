// import './utils.js'

import subtract, { square, add } from './utils.js' // named export
import isSenior, { isAdult, canDrink } from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// console.log('app.js is running ');
// // console.log(square(4));
// // console.log(add(4, 3))
// console.log(subtract(100, 50));

// console.log(isAdult(30));
// console.log(canDrink(20));
// console.log(isSenior(60));

console.log(validator.isEmail("kwony.cho@gmail.com"))

const template = <p>THIS is JSX FROM WEBPACK!</p>

ReactDOM.render(template, document.getElementById('app'));