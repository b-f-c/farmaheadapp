import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Selection from './Components/Selection';
import logo from './logo.svg';

const App = () => (
  <div className="App">
    <div style={{ position: 'absolute', zIndex: 2 }}>
      <h1 style={{ textAlign: 'center' }}>Farm Ahead</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Selection />
    </div>
    <div className="App-background" />
  </div>
);

export default App;
