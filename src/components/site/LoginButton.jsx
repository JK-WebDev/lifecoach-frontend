/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default withAuth0(
  class LoginButton extends Component {
    handleClick = () => {
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
        signIn: "Sign in",
        signOut: "Sign out",
      };
      const { isAuthenticated, user } = this.props.auth0;
      const variant = isAuthenticated ? "danger" : "primary";

      return (
        <>
          {isAuthenticated && user?.picture && (
            <Image
              src={user.picture}
              roundedCircle
              fluid
              height="40"
              width="40"
              className="me-3"
            />
          )}
          <Button variant={variant} onClick={this.handleClick}>
            {isAuthenticated ? strings.signOut : strings.signIn}
          </Button>
        </>
      );
    }
  }
);
