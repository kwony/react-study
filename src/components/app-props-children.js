// Grab the add function from the add.js file in the utils folder
// Grab React from the reactnpm module

// run `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` to auto update on save

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render((
    <Layout>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </Layout>
), document.getElementById('app'));
