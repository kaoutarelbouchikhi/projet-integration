import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../components/Logo";
import NavDropdown from "react-bootstrap/NavDropdown";

const navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
      className="navigation"
    >
      <Container>
        <Navbar.Brand href="/accueil">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/categorie">Categorie</Nav.Link>
            <Nav.Link href="/fiche-film">Fiche film</Nav.Link>
            <Nav.Link href="/fiche-acteur">Fiche acteur</Nav.Link>
            <Nav.Link href="/recherche">Recherche</Nav.Link>
            <Nav.Link href="/a-propos">À propos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/connexion">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
