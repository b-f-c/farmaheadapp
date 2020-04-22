import React from 'react'
import { Form } from 'react-bootstrap'

const Selection = () => {
  const SHOPPER = 'I am a shopper'
  const VENDOR = 'I am a vendor'
  const SPECIFIC_PRODUCE = 'Looking for specific produce'
  const SHOPPING_LOCATIONS = 'Looking for shopping Locations'
  const handleChange = (e) => e.target.value

  return (
    <Form inline>
      <Form.Row>
        <Form.Group controlId="formUser">
          <Form.Control as="select" onChange={handleChange}>
            <option value={SHOPPER}>{SHOPPER}</option>
            <option value={VENDOR}>{VENDOR}</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="formOption">
          <Form.Control as="select" onChange={handleChange}>
            <option value={SPECIFIC_PRODUCE}>{SPECIFIC_PRODUCE}</option>
            <option value={SHOPPING_LOCATIONS}>{SHOPPING_LOCATIONS}</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

export default Selection
