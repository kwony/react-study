
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


// yarn run dev-server
export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    // babel babel-plugin-transform-class-properties plugin helps to remove bindings
    // constructor(props) {
    //     super(props);
        
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: props.options
    //     };
    // }

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

    componentWillUnmount() { // 
        console.log('componentWillUnmount');
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log(optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handlePick = () => {
        const index = Math.floor(Math.random() * (this.state.options.length))
        const option = this.state.options[index];

        this.setState(() => ({selectedOption: option}))

        // alert('random options: ' + this.state.options[index])
    }

    handleAddOption = (option) => {
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

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    render() {
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} // 함수를 전달한다. state 정보는 IndecisionApp 클래스에서 관리하니까. 이거를 잘 정해주는게 중요할듯!
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    
                    
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ['abc','def']
};
