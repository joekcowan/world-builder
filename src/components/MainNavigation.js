import React from 'react';

import {Navbar, Container, Nav} from "react-bootstrap";
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function MainNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/"><Navbar.Brand ><span className='fw-normal'>World</span> <span className='fw-lighter'>Builder</span></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/worlds">
              <Nav.Link>Worlds</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/facets">
              <Nav.Link>Facets</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default MainNavigation;