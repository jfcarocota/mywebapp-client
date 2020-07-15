import React, {Component} from 'react';

export default class Input extends Component{

    state = {
        placeholder: this.props.placeholder ? this.props.placeholder : '',
        onChange: this.props.onChange ? this.props.onChange : '',
        type: this.props.type ? this.props.type : 'text'
    }

    render() {

        const {placeholder, onChange, type} = this.state;

        return (
            <input onChange={onChange} className="form-control" type={type} placeholder={placeholder}/>
        );
    }
}