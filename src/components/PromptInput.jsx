import { Component } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class PromptInput extends Component {
  render() {
    const strings = {
      searchLabel: "\u{1F50D}",
      searchButton: "Give me advice!",
    };

    return (
      <>
        <InputGroup>
          <InputGroup.Text>{strings.searchLabel}</InputGroup.Text>
          <Form.Control type="search" />
          <Button>{strings.searchButton}</Button>
        </InputGroup>
      </>
    );
  }
}
