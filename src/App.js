import React, { Component } from 'react';
import CategoryForm from './components/CategoryForm';
import jeopLogo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="App-header col">
            <img src={jeopLogo} className="App-logo img-fluid" alt="logo" />
          </header>
        </div>
        <div className="row">
          <div className="col"></div>
          <CategoryForm className="CategoryForm col" />
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default App;
