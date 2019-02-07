import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <h3>Clientes</h3>
                </Navbar.Brand>
            </Navbar>
        );
    }

}

export default Header;