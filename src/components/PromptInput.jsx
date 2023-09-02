import { Component } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class PromptInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = e.target;
    this.props.getGeneratedTask(query.value);
    e.target.reset();
  };

  render() {
    const strings = {
      searchLabel: "\u{1F50D}",
      searchButton: "Give me advice!",
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text>{strings.searchLabel}</InputGroup.Text>
          <Form.Control type="search" name="query" />
          <Button type="submit">{strings.searchButton}</Button>
        </InputGroup>
      </Form>
    );
  }
}
