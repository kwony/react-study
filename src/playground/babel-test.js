const appRoot = document.getElementById('app');

function renderApp() {
    // JSX - JavaScript XML 
    var template = <div>
        <p>Hello react</p>
    </div>

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
 }
 renderApp()