class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)


        this.state = {
            counter: 0
        };
    }

    handleIncrease() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }
    handleDecrease() {
        this.setState((prevState) => {return {counter: prevState.counter - 1}})
    }

    render() {
        const title = '아는개발자'
        const subtitle = '이번에는 state를 공부해봅시다'
        const incrButton = '+1'
        const decrButton = '-1'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action buttonName={incrButton} handleClick={this.handleIncrease} />
                <Action buttonName={decrButton} handleClick={this.handleDecrease} />
                <p>현재 값: {this.state.counter}</p>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )        
    }
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handleClick}
            >
                {props.buttonName}
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))