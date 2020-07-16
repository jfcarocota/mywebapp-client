import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Button from '../Button';
import Input from '../Input';
import FormGroup from '../FormGroup';
import sha256 from 'crypto-js/sha256';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import SessionContext from '../Session/SessionContext';

export default class Login extends Component{

    static contextType = SessionContext;

    state = {
        username: '',
        password: ''
    }

    authenticate = ()=>{
        const {username, password} = this.state;
        axios.post('http://localhost:8081/authhash', {message:sha256(`${username}:${password}`).toString()})
        .then( response => {
            const sessionInfo = JwtDecode(response.data);
            this.context.state.authorization = response.data;
            //console.log(this.context.state.authorization);
            //un numero entero significa un di­a
            //this.context.tokenizer();
            Cookies.set('session', sessionInfo.session, {expires: 1});
            Cookies.set('authorization', response.data);
            this.props.history.push('/dashboard');
        });
    }

    handleUsernameChange = e =>{
        this.setState({username: e.target.value});
    }

    handlePasswordChange = e =>{
        this.setState({password: e.target.value});
    }

    componentDidMount(){
        if(Cookies.get('session')){
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Login</h1>
                <div style={{
                    width: '30%'
                }}>
                    <FormGroup>
                        <span>Username: </span>
                        <Input onChange={this.handleUsernameChange} placeholder="username"/>
                        <span>Password: </span>
                        <Input onChange={this.handlePasswordChange} placeholder="password" type="password"/>
                        <Button onClick={this.authenticate} type="primary" name="login"/>
                    </FormGroup>
                </div>
            </Fragment>
        );
    }
}