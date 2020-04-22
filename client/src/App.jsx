import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage'
import Markets from './components/Markets'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LandingPage />
          </Route>
          <Route path="/markets">
            <Markets />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
