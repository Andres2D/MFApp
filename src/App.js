import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Trabajo from './Components/Trabajo';
import Historial from './Components/Historial';
import Sueldo from './Components/Sueldo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Trabajo/>
      </div>
    );
  }
}

export default App;
