import React, {Component} from 'react';
import RouteProtected from '../RouteProtected';

export default class Dashboard extends Component{

    render() {
        return (
            <RouteProtected>
                <h1>Dashboard</h1>
            </RouteProtected>
        );
    }
}