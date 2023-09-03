import { Component } from "react";

import Card from "react-bootstrap/Card";

export default class TaskListItem extends Component {
  render() {
    const { task, setSelectedTask } = this.props;

    return (
      <Card
        className="mb-2"
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedTask(task)}
      >
        <Card.Body>
          <Card.Text>{task.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
