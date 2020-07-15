import React, {Component, createContext, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

const SessionContext = createContext();

export class SessionProvider extends Component{

    state = {
        sessionLink: <Fragment/>,
        hello: ''
    }

    showHello = ()=> this.setState({hello: 'Hola empleado'});

    hideHello = ()=> this.setState({hello: ''});

    hideLink = ()=> this.setState({sessionLink: <Fragment/>});

    logout = ()=> {
        Cookies.remove('session');
        this.hideLink();
        this.hideHello();
    }

    logoutLink = <Link onClick={this.logout} to="/">logout</Link>;

    showLink = ()=> this.setState({sessionLink: this.logoutLink});

    render() {
        return (
            <SessionContext.Provider value={{
                state: this.state,
                showLink: this.showLink,
                showHello: this.showHello
            }}>
                {this.props.children}
            </SessionContext.Provider>
        );
    }
}

export default SessionContext;