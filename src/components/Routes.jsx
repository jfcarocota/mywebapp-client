import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

export default class Routes extends Component{

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        );
    }
}