import React, {Component, Fragment} from 'react';
import SessionContext from './SessionContext';

export default class Session extends Component{

    static contextType = SessionContext;

    render() {
        return (
            <Fragment>
                {this.context.state.sessionLink}
                <div>{this.context.state.hello}</div>
            </Fragment>
        );
    }
}