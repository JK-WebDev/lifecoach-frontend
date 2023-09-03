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
    const strings = {
      messageHeader: "Jimmy says:",
      taskHeader: "Try doing this: (or don't)",
      addButtonLabel: "Add to my task list",
    };

    return (
      <Card>
        <Card.Header className="d-flex justify-content-end">
          <CloseButton onClick={handleClose} />
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-justify-justify px-2">
            <h2 className="fs-5">{strings.messageHeader}</h2>
            {message}
          </Card.Title>
          <Card.Text className="text-justify-justify p-2">
            <hr />
            <h2 className="fs-5">{strings.taskHeader}</h2>
            {task}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={addNewTask}>{strings.addButtonLabel}</Button>
        </Card.Footer>
      </Card>
    );
  }
}
