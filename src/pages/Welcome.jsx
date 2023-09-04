/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default withAuth0(
  class Welcome extends Component {
    handleClick = (e) => {
      e.preventDefault();
      const { loginWithPopup, logout, isAuthenticated } = this.props.auth0;

      isAuthenticated
        ? logout({
            logoutParams: {
              returnTo: import.meta.env.VITE_AUTH0_REDIRECT,
            },
          })
        : loginWithPopup();
    };

    render() {
      const strings = {
        welcomeMsg:
          "Hey there! Feel free to sign in if you're ready to shape up and get your life in order.",
        signInText: "sign in",
      };
      const [welcomePre, welcomePost] = strings.welcomeMsg.split(
        strings.signInText
      );

      return (
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center align-content-center">
              <p className="pt-5">
                {welcomePre}
                <a href="/" onClick={this.handleClick}>
                  {strings.signInText}
                </a>
                {welcomePost}
              </p>
            </Col>
          </Row>
        </Container>
      );
    }
  }
);
