import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';
import Input from './forms/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
