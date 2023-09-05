/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { CallToAction } from "../components";

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
        <CallToAction>
          {welcomePre}
          <a href="/" onClick={this.handleClick} className="text-white">
            {strings.signInText}
          </a>
          {welcomePost}
        </CallToAction>
      );
    }
  }
);
