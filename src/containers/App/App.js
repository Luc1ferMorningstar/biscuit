import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Logo />
        </header>
      </div>
    );
  }
}

export default App;
