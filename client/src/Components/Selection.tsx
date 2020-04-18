import React from 'react';
import {
    Nav, Navbar, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

export const Selection = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Form inline>
                <Navbar.Brand>I am a...</Navbar.Brand>
                <NavDropdown title="Select one" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Shopper</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Farmer</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand>Looking for...</Navbar.Brand>
                <NavDropdown title="Select one" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Produce</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Locations</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                </Navbar.Collapse>
            </Form>
        </Navbar>
    )
}