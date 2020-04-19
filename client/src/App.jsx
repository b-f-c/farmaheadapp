import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  Nav, Navbar, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
