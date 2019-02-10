import React, { Component } from 'react';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Button onClick={this.props.showModalRegistrar}>Nuevo cliente</Button>
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default Menu;