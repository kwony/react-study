import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;