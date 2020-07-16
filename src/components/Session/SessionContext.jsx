import React, {Component, createContext, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const SessionContext = createContext();

export class SessionProvider extends Component{

    state = {
        sessionLink: <Fragment/>,
        hello: '',
    }

    tokenLoop = '';

    showHello = ()=> this.setState({hello: 'Hola'});

    hideHello = ()=> this.setState({hello: ''});

    hideLink = ()=> this.setState({sessionLink: <Fragment/>});

    logout = ()=> {
        Cookies.remove('session');
        this.hideLink();
        this.hideHello();
        clearTimeout(this.tokenLoop);
        Cookies.remove('authorization')
    }

    generateToken = ()=>{
        axios.get('http://localhost:8081/token', {headers: {authorization: Cookies.get('authorization')}})
                .then(response => Cookies.set('authorization', response.data));
    }

    tokenizer = ()=>{
        this.tokenLoop = setTimeout(() => {
            this.generateToken();
            //console.log(Cookies.get('authorization'));
            this.tokenizer();
        }, 5000);
    }

    logoutLink = <Link onClick={this.logout} to="/">logout</Link>;

    showLink = ()=> this.setState({sessionLink: this.logoutLink});

    render() {
        return (
            <SessionContext.Provider value={{
                state: this.state,
                showLink: this.showLink,
                showHello: this.showHello,
                generateToken: this.generateToken,
                tokenizer: this.tokenizer
            }}>
                {this.props.children}
            </SessionContext.Provider>
        );
    }
}

export default SessionContext;