import { Component } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default class PromptInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promptText: "",
    };
  }

  handleTextInput = ({ target: { value: promptText } }) => {
    this.setState({ promptText });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = e.target;
    this.props.getGeneratedTask(query.value);
    e.target.reset();
  };

  handleReset = () => {
    this.setState({ promptText: "" });
  };

  render() {
    const {
      props: { isLoading },
      state: { promptText },
    } = this;
    const strings = {
      searchLabel: "\u{1F916}",
      btnLoadingText: "Let me think about that \u{1F914}",
      btnDisabledText: "\u{2190} Ask me a question",
      btnEnabledText: "Get some advice!",
    };

    const isDisabledBtn = isLoading || promptText.length < 3;

    return (
      <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <InputGroup size="lg">
          <InputGroup.Text className="fs-4 p-2">
            {strings.searchLabel}
          </InputGroup.Text>
          <Form.Control
            type="search"
            name="query"
            value={this.state.promptText}
            onChange={this.handleTextInput}
          />
          <Button type="submit" disabled={isDisabledBtn}>
            {isLoading
              ? strings.btnLoadingText
              : isDisabledBtn
              ? strings.btnDisabledText
              : strings.btnEnabledText}
            {isLoading && (
              <Spinner
                animation="border"
                variant="light"
                size="sm"
                role="status"
                className="ms-3 my-auto"
              />
            )}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}
