import { Component } from "react";

export default class Footer extends Component {
  render() {
    const strings = {
      copyright: `\u00A9 2023 JK WebDev`,
    };
    return (
      <footer className="bg-secondary bg-gradient text-white justify-content-between align-items-center pt-3 fixed-bottom">
        <p className="text-center">{strings.copyright}</p>
      </footer>
    );
  }
}
