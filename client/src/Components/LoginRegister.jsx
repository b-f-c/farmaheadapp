import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const LoginRegister = () => (
  <div className="App-login-container">
    <Button style={{margin: '5px'}} variant="success">
      <Link className="App-link" to="/foo">Login</Link>
    </Button>
    <Button style={{margin: '5px'}} variant="primary">
      <Link className="App-link" to="/bar">Register</Link>
    </Button>
  </div>
)

export default LoginRegister
