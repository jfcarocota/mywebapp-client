import React, {Component, Fragment} from 'react';
//import Button from './components/Button';
import Routes from './components/Routes';
import Session from './components/Session/Session';
import { SessionProvider } from './components/Session/SessionContext';

export default class App extends Component{

  render() {

    return(
      <Fragment>
        <SessionProvider>
          <Session/>
          <Routes/>
        </SessionProvider>
      </Fragment>
    );
  }
}

