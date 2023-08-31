import { Component } from "react";

export default class Welcome extends Component {
  render() {
    const strings = {
      welcomeMsg: "Hey there! Please sign in to get started.",
    };
    return <p>{strings.welcomeMsg}</p>;
  }
}
