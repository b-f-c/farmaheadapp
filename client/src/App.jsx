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

import NavHeader from './components/NavHeader'

import Markets from './components/Markets'

function App() {
  return (
    <Router>
      <div className="App">
				<div style={{width: '100%'}}>
					<NavHeader />
				</div>
        <Switch>
          <Route path="/foo">
            <div>foo</div>
          </Route>
          <Route path="/markets">
            <Markets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
