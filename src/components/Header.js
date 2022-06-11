import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Header extends Component {
  render() {
    return (
        <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}
