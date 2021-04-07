import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        {/* <Resume />
        <Portfolio />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
