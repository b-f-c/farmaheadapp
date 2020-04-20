import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import Selection from './components/Selection';
import Markets from './components/markets';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/markets">
            <Markets />
          </Route>
          <Route path="/">
            <div style={{ position: 'absolute', zIndex: 2 }}>
              <h1 style={{ textAlign: 'center' }}>Farm Ahead</h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Selection />
            </div>
            <div className="App-background" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
