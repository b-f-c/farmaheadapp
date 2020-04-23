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
import Page from './components/page/Page'

// l o l
import * as constants from './constants/constants'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LandingPage />
          </Route>
          <Route path={`/${constants.MARKET}`}>
            <Page page={constants.MARKET} />
          </Route>
          <Route path={`/${constants.VENDOR}`}>
            <Page page={constants.VENDOR} />
          </Route>
          <Route path={`/${constants.PRODUCE}`}>
            <Page page={constants.PRODUCE} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
