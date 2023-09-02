import { Component } from "react";

export default class Welcome extends Component {
  render() {
    const strings = {
      welcomeMsg:
        "Hey there! Feel free to sign in if you're ready to shape up and get your life in order.",
    };
    return <p>{strings.welcomeMsg}</p>;
  }
}
