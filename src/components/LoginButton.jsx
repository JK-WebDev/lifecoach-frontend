import { Component } from "react";

import Button from "react-bootstrap/Button";

export default class LoginButton extends Component {
  render() {
    const strings = {
      signIn: "Sign in",
      signOut: "Sign out",
    };
    return (
      <>
        <Button>{strings.signIn}</Button>
      </>
    );
  }
}
