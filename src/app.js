// Grab the add function from the add.js file in the utils folder
// Grab React from the reactnpm module

// run `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` to auto update on save

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return 'Hi, My name is ${this.name}';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax)

// --------- 

class NewSyntax {
    name ='Jen';
    getGreeting = () => {
        return `Hi My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();

const newGetGreeting = newSyntax.getGreeting

console.log(newSyntax);
console.log(newGetGreeting)