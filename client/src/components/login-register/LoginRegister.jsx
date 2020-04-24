import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from '../modal'
import { VENDOR, MARKET_ADMIN, SHOPPER } from '../../constants/roleConstants'

export default (props) => {
  const [showLoginModal, toggleLoginModal] = useState(false)
  const [showRegisterModal, toggleRegisterModal] = useState(false)
  const { ...otherProps } = props

  return (
    <div {...otherProps}>
      <Button
        style={{ margin: '5px' }}
        variant="success"
        onClick={() => {
          toggleLoginModal(!showLoginModal)
        }}
      >
        Login
      </Button>
      <Button
        style={{ margin: '5px' }}
        variant="primary"
        onClick={() => {
          toggleRegisterModal(!showRegisterModal)
        }}
      >
        Register
      </Button>

      <Modal
        onClose={toggleLoginModal}
        showModal={showLoginModal}
        title="Login"
      >
        <Form>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="rememberMe">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
        </Form>
      </Modal>

      <Modal
        onClose={toggleRegisterModal}
        showModal={showRegisterModal}
        title="Register"
      >
        <Form>
          <Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Form.Group controlId="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="70 West Delavan Ave" />
          </Form.Group>
          <Form.Group controlId="address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Buffalo" />
            </Form.Group>
            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" value="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="zipcode">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type="text" placeholder="14213" />
            </Form.Group>
          </Row>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal>
    </div>
  )
}
