import { Component } from "react";

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

    return (
      <header className="bg-secondary bg-gradient fixed-top">
        <Navbar>
          <Container fluid>
            <Nav>
              <Navbar.Brand>{strings.brand}</Navbar.Brand>
              <Nav.Link>{strings.home}</Nav.Link>
              <Nav.Link>{strings.about}</Nav.Link>
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
