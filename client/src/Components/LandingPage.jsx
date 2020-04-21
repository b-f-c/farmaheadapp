import React from 'react'
import LoginRegister from './LoginRegister'
import logo from '../logo.svg'

const LandingPage = () => (
  <div style={{ position: 'absolute', zIndex: 2 }}>
    <h1 style={{ textAlign: 'center' }}>Farm Ahead</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <LoginRegister />
  </div>
)

export default LandingPage