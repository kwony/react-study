class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate!'); // lifecycle function
        

        if (prevState.count !== this.state.count) {
            console.log('saving data');

            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count: count}))

        }
    }

    handleAddOne() {
        var newCount = this.state.count + 1;
        // this.state.count = this.state.count + 1;   
        this.setState((prevState) => {
            return {
                // count: newCount
                count: prevState.count + 1
            };
        });
        console.log(this.state.count);
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        console.log("handle minus one");
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

        /// 위의 코드랑 아래 코드랑 결과가 다르다. prevState를 참조 했느냐 안했느냐의 차이

        // this.setState({
        //     count: 0
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 300
}

ReactDOM.render(<Counter count={-30}/>, document.getElementById('app'));

// var app = {
//     title: 'Some title',
//     subtitle: 'This is my subtitle',
//     options: []
// }

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     console.log("submitted " + option)

//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = '';
//     }

//     render()
// }

// const onRemoveAll = () => {
//     app.options = []
//     render()
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }

// const numbers = [1, 2, 3, 4]

// const appRoot = document.getElementById('app');

// const renderOptions = () => {
//     return app.options.map((option) => {
//         return <li key={option}>{option}</li>
//     })
// }

// const render = () => {
//     // JSX - JavaScript XML 
//     var template = (
//         <div>
//             <h1>{app.title}</h1>
//             { (app.subtitle) && <p>{app.subtitle}</p> }
//             { app.options.length > 0 ? <p>Here are options</p> : <p>No options</p>}
//             <p>{app.options.length}</p>
//             {
//                 app.options.map((option) => {
//                     return <li key={option}>{option}</li>
//                 })
//             }
//             <p>render option different way</p>
//             {
//                 renderOptions()
//             }
//             <form onSubmit={onFormSubmit}>
//                 <input type='text' name="option"/> 
//                 <button>Add Option </button>
//             </form>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
//             <button onClick={onRemoveAll}>remove all</button>
//             {
//                 numbers.map((number) => {
//                     return <p key={number}>Number {number * 2}</p>
//                 })
//             }
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot)
// }

// render();




