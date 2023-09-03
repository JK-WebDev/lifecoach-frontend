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
        <Navbar>
          <Container fluid>
            <Nav variant="underline">
              <Navbar.Brand className={`${textColor}`}>
                {strings.brand}
              </Navbar.Brand>
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
              <LoginButton />
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
  }
}
