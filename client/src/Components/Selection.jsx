import React from 'react'
import {
  Navbar, Form, FormControl, Button,
} from 'react-bootstrap'

const Selection = () => {
  const SHOPPER = 'Shopper'
  const VENDOR = 'Vendor'
  const SPECIFIC_PRODUCE = 'Specific Produce'
  const SHOPPING_LOCATIONS = 'Shopping Locations'
  const handleChange = (e) => e.target.value

  return (
    <Navbar bg="light" expand="lg">
      <Form inline>
        <Form.Row>
          <Form.Group controlId="formUser">
            <Form.Control as="select" placeholder="I am a..." onChange={handleChange}>
              <option value={SHOPPER}>Shopper</option>
              <option value={VENDOR}>Vendor</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formOption">
            <Form.Control as="select" placeholder="Looking for..." onChange={handleChange}>
              <option value={SPECIFIC_PRODUCE}>Specific Produce</option>
              <option value={SHOPPING_LOCATIONS}>Shopping Locations</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  )
}

export default Selection
