import React from 'react';

const MiddleMenu = () => (
  <Navbar expand="lg">
    <Container className="justify-content-center pt-4">
      <Nav className="justify-content-end">
        <NavDropdown title="MEN" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="WOMEN" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="KIDS" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <NavDropdown title="BRANDS" className="px-3">
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
        <Nav.Link className="px-3">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);