import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default () => (
  <div >
    <Button style={{margin: '5px'}} variant="success">
      <Link className="App-link" to="/markets">Login</Link>
    </Button>
    <Button style={{margin: '5px'}} variant="primary">
      <Link className="App-link" to="/bar">Register</Link>
    </Button>
  </div>
)
