import { Component } from "react";

export default class Footer extends Component {
  render() {
    const strings = {
      copyright: `\u00A9 2023`,
    };
    return (
      <footer className="bg-secondary bg-gradient fixed-bottom">
        <p>{strings.copyright}</p>
      </footer>
    );
  }
}
