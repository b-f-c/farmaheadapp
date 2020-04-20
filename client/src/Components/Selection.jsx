import React from 'react';
import {
  Navbar, Form, FormControl, Button,
} from 'react-bootstrap';

const Selection = () => (
  <Navbar bg="light" expand="lg">
    <Form inline>
      <Form.Row>
        <Form.Group controlId="formUser">
          <Form.Control as="select" value="I am a...">
            <option>Shopper</option>
            <option>Farmer</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="formOption">
          <Form.Control as="select" value="Looking for...">
            <option>Specific Produce</option>
            <option>Shopping Locations</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar>
);

export default Selection;
