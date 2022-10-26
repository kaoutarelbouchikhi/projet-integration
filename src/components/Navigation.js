import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../components/Logo";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="dark"
      className="navigation"
      
    >
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-center">
            <Nav.Link href="/">Accueil</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Row>
                <Col>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Aventure </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Animation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Comédie</NavDropdown.Item>
                  
                </Col>
                <Col>
                <NavDropdown.Item href="#action/3.4">Crime</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Drame</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"> Fantastique</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Historique</NavDropdown.Item>
            
                </Col>
                <Col>
                  <NavDropdown.Item href="#action/3.4">Horreur</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Mystère</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Suspense</NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>
            <Nav.Link href="/a-propos">À propos</Nav.Link>
          </Nav>
          <Nav className="text-center">
            <Nav.Link href="/recherche">Recherche</Nav.Link>
            <Nav.Link href="/caroussel">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
