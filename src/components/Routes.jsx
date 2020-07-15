import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Sales from './Sales/Sales';

export default class Routes extends Component{

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/sales" component={Sales}/>
            </Switch>
        );
    }
}