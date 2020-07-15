import React, {Component} from 'react';
import RouteProtected from '../RouteProtected';
import axios from 'axios';

export default class Dashboard extends Component{

    state = {
        persons: []
    }

    componentDidMount(){
        axios.get('http://localhost:8081/persons')
            .then(response => {
                this.setState({persons: response.data.map(index =>{
                    return <li key={index.id}>
                        Nombre: {index.name}
                        <div>Edad: {index.age}</div>
                    </li>
                })});
            });
    }

    render() {
        return (
            <RouteProtected>
                <h1>Dashboard</h1>
                <ul>
                    {this.state.persons}
                </ul>
            </RouteProtected>
        );
    }
}