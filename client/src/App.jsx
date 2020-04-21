import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <LandingPage />
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
  )
}

export default App
