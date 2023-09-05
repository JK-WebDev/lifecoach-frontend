import { Component } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import LoginButton from "./LoginButton";

export default class Header extends Component {
  render() {
    const strings = {
      brand: "AI Life Coach",
      home: "Home",
      about: "About Us",
    };

    const textColor = "text-white";

    return (
      <header className="bg-secondary bg-gradient sticky-top">
        <Navbar expand="lg" collapseOnSelect>
          <Container fluid>
            <Navbar.Brand className={`${textColor}`}>
              {strings.brand}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav variant="underline" className="flex-grow-1">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" className={`${textColor}`}>
                    {strings.home}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" className={`${textColor}`}>
                    {strings.about}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav>
                <Nav.Item className="d-flex flex-row justify-content-end gap-2">
                  <Nav.Link>
                    <LoginButton />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
