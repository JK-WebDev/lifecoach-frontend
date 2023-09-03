import { Component } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default class PromptInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = e.target;
    this.props.getGeneratedTask(query.value);
    e.target.reset();
  };

  render() {
    const { isLoading } = this.props;
    const strings = {
      searchLabel: "\u{1F916}",
      searchButton: "Give me advice!",
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text className="fs-2">
            {strings.searchLabel}
          </InputGroup.Text>
          <Form.Control type="search" name="query" />
          <Button type="submit" disabled={isLoading}>
            {strings.searchButton}
            {isLoading && (
              <Spinner
                animation="border"
                variant="light"
                size="sm"
                role="status"
                className="ms-2 my-auto"
              />
            )}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}
