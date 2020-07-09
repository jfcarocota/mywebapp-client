import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    authenticate = ()=>{
        //alert("Hola");
        const {username, password} = this.state;
        axios.post('http://localhost:8081/auth', {username: username, password: password})
        .then( response => {
            //this.props.history.push('/dashboard');
            return <Redirect to="/dashboard"/>;
        });
    }

    handleUsernameChange = e =>{
        this.setState({username: e.target.value});
    }

    handlePasswordChange = e =>{
        this.setState({password: e.target.value});
    }

    componentDidUpdate(){
        const {username, password} = this.state;
        console.log(username);
        console.log(password);
    }

    render() {
        return (
            <Fragment>
                <h1>Login</h1>
                <div style={{
                    width: '30%'
                }}>
                    <div className="form-group">
                        <span>Username: </span>
                        {/*<input onChange={this.handleUsernameChange} className="form-control" type="email" placeholder="username"/><br/>*/}
                        <input onChange={this.handleUsernameChange} className="form-control" type="text" placeholder="username"/><br/>
                        <span>Password: </span>
                        <input onChange={this.handlePasswordChange} className="form-control" type="password" placeholder="password"/><br/>
                        <input onClick={this.authenticate} type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}