import React, {Component} from 'react';

export default class Button extends Component{



    state = {
        name: props.name ? props.name : 'something',
        type: props.type ? props.type : 'primary',
        //click: props.click ? props.click : ()=> console.log('click default')
        click: props.click ? props.click : this.defaultClick,
        //parentContext: props.parentContext
    }
    

    defaultClick = ()=> {
        console.log('click default');
        this.props.parentContext.setState({message: 'mensaje cambiado'});
        //this.state.parentContext.setState({message: 'mensaje cambiado'});

        this.setState({name: 'sdfsdf'});
    }

    render() {

        const {name, type, click} = this.state;

        return (
            <button onClick={click} href="#" className={`btn btn-${type}`}>{name}</button>
        );
    }
}