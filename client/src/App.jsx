import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Selection } from './Components/Selection.tsx';
import logo from './logo.svg';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Farm Ahead</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Selection />
  </div>
);

export default App;
