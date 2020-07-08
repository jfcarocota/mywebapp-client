import React, {Component, Fragment} from 'react';
import Button from './components/Button';

export default class App extends Component{

  constructor(){
    super();

    this.state={
      message: 'default mesage'
    }
  }

  componentDidMount(){
    console.log(this.state.message);
  }

  componentDidUpdate(){
    console.log(this.state.message);
  }

  render() {

    return (
      <Fragment>
        <h1>App</h1>
        <h4>subtitulo</h4>

        <div className="card" style={{
          width: '18rem'
        }}>
          <img className="card-img-top" src="..." alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button name="enviar" type="success" parentContext={this}/>
          </div>
      </div>
      </Fragment>
    );
  }

  /*clickCall(){
    console.log('llamando desde App component');
  }*/

}

//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
