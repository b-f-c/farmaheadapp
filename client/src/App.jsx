import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LandingPage from './components/landing-page'
import Market from './components/market'
import Vendor from './components/vendor'
import Page from './components/page'

import { MARKET, VENDOR, PRODUCE, ADMIN } from './constants/globalConstants'
import Produce from './components/produce/Produce'
import VendorAdmin from './components/vendor-admin'

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
              <Market />
            </Page>
          </Route>
          <Route path={`/${VENDOR}`}>
            <Page page={VENDOR}>
              <Vendor />
            </Page>
          </Route>
          <Route path={`/${PRODUCE}`}>
            <Page page={PRODUCE}>
              <Produce />
            </Page>
          </Route>
          <Route path={`/${VENDOR}/${ADMIN}`}>
            <VendorAdmin />
          </Route>
          <Route>
            <div style={{ color: '#ffffff' }}>404</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
