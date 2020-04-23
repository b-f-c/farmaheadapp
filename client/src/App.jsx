import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage'
import Market from './components/markets/'
import Page from './components/page/Page'

import {MARKET, VENDOR, PRODUCE} from './constants/globalConstants'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to={`/${MARKET}`} />
          </Route>
          <Route path="/login">
            <LandingPage />
          </Route>
          <Route path={`/${MARKET}`}>
            <Page page={MARKET}>
              <Market/>
            </Page>
          </Route>
          <Route path={`/${VENDOR}`}>
            <Page page={VENDOR} />
          </Route>
          <Route path={`/${PRODUCE}`}>
            <Page page={PRODUCE} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
