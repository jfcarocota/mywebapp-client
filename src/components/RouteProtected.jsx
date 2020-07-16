import React, {Component, Fragment} from 'react';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom';
import SessionContext from './Session/SessionContext';

class RouteProtected extends Component{

    static contextType = SessionContext;

    state = {
        employee: Cookies.getJSON('session')
    }

    componentDidMount(){
        if(!Cookies.get('session')){
            this.props.history.push('/');
        }else{
            //this.context.state.authorization = response.data;

            this.context.generateToken();
            this.context.tokenizer();

            this.context.showLink();
            //console.log(this.context.state.authorization);
            this.context.state.hello = `Bienvenido: ${this.state.employee.username}`;
        }
    }

    render() {
        return (
            <Fragment>{this.props.children}</Fragment>
        );
    }
}

export default withRouter(RouteProtected);