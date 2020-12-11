// Grab the add function from the add.js file in the utils folder
// Grab React from the reactnpm module

// run `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` to auto update on save

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        console.log('componentDidMount!'); // lifecycle function
        console.log('fetching data');

        // load data from localStorage
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if (options) {
            this.setState(() => ({options: options}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate!'); // lifecycle function
        

        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    // calle dwhen component is removed from browser 
    // call command `ReactDOM.render(React.createElement('p'), document.getElementById('app'))`  in console
    componentWillUnmount() { // 
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({ options:[] }));
    }

    handleDeleteOption(optionToRemove) {
        console.log(optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handlePick() {
        const index = Math.floor(Math.random() * (this.state.options.length))
        alert('random options: ' + this.state.options[index])
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        console.log('handleAddOption' + option);

        this.setState((prevState) => ({options: prevState.options.concat([option])}))
        // this.setState((prevState) => {
        //     // const newOptions = prevState.options;
        //     // newOptions.push(option)

        //     return { options: prevState.options.concat([option]) };
        // })
    }

    render() {
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} // 함수를 전달한다. state 정보는 IndecisionApp 클래스에서 관리하니까. 이거를 잘 정해주는게 중요할듯!
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ['abc','def']
};

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'IndecisionApp'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    )    
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        { props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            // this.props.options.map((option) => {
            //     return <p key={option}><Option option={option} /></p>
            // })
            // this.props.options.map((option) => <p key={option}>{option}</p>)

            props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)
        }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>{props.optionText} 
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        console.log(error);

        this.setState(() => {error})

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div> 
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name="option"/> 
                    <button>Add Option </button>
                </form>
            </div>
        )
    }
}

// ReactDOM.render(<User name="Andrew" age={26} />, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));