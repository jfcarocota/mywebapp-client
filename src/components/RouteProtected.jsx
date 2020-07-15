import React, {Component, Fragment} from 'react';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom';
import SessionContext from './Session/SessionContext';

class RouteProtected extends Component{

    static contextType = SessionContext;

    componentDidMount(){
        if(!Cookies.get('session')){
            this.props.history.push('/');
        }else{
            this.context.showLink();
            this.context.showHello();
            //this.context.perrito = 'gato';
            //console.log(this.context.perrito);
        }
    }

    render() {
        return (
            <Fragment>{this.props.children}</Fragment>
        );
    }
}

export default withRouter(RouteProtected);