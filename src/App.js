import React, { Component } from 'react';
import { subscribeToTimer, yoyo } from './api';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    yoyo(b => this.setState({test: b}));

  }

  state = {
    timestamp: 'no timestamp yet',
    test: ""
  };
  render() {
    console.log(this.state.test)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        This is the timer value: {this.state.timestamp} < br/>
        {this.state.test}

        < br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
