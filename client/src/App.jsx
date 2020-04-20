import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import Selection from './Components/Selection';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <div style={{ position: 'absolute', zIndex: 2 }}>
              <h1 style={{ textAlign: 'center' }}>Farm Ahead</h1>
              <img src={logo} className="App-logo" alt="logo" />
              <Selection />
            </div>
            <div className="App-background" />
          </Route>
          <Route path="/foo">
            <div>foo</div>
          </Route>
          <Route path="/bar">
            <div>bar</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
