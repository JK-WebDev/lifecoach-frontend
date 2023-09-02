import { Component } from "react";

import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

export default class ResponseCard extends Component {
  handleClose = () => {
    this.props.updateGeneratedResponse();
  };

  render() {
    const {
      props: {
        generatedResponse: { message, task },
        addNewTask,
      },
      handleClose,
    } = this;

    return (
      <Card>
        <Card.Header>
          <CloseButton onClick={handleClose} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{message}</Card.Title>
          <Card.Text>{task}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={addNewTask}>Add to my task list</Button>
        </Card.Footer>
      </Card>
    );
  }
}
