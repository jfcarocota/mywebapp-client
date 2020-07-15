import React, {Component} from 'react';

export default class Button extends Component{

    state = {
        name: this.props.name ? this.props.name : 'something',
        type: this.props.type ? this.props.type : 'primary',
        onClick: this.props.onClick ? this.props.onClick : this.defaultClick
    }
    

    defaultClick = ()=> {
        console.log('click default');
        this.props.parentContext.setState({message: 'mensaje cambiado'});
        this.setState({name: 'sdfsdf'});
    }

    render() {

        const {name, type, onClick} = this.state;

        return (
            <button onClick={onClick} href="#" className={`btn btn-${type}`}>{name}</button>
        );
    }
}