import React, {Component} from 'react';
import RouteProtected from '../RouteProtected';

export default class Sales extends Component{

    render() {
        return (
            <RouteProtected>
                <h1>Sales</h1>
            </RouteProtected>
        );
    }
}