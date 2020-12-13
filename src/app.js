// Grab the add function from the add.js file in the utils folder
// Grab React from the reactnpm module

// yarn run dev-server 

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
