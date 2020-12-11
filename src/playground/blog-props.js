class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        alert('button clicked');
    }

    render() {
        const title = '아는개발자'
        const subtitle = '리액트를 공부해봅시다'
        const buttonName = 'click'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action buttonName={'click'} handleClick={this.handleClick} />
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