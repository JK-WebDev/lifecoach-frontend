import { Component } from "react";

import "./TaskListItem.css";

import Card from "react-bootstrap/Card";

export default class TaskListItem extends Component {
  render() {
    const { task, setSelectedTask } = this.props;

    return (
      <Card
        className={`mb-2 ${task.isCompleted ? "completed" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedTask(task)}
      >
        <Card.Body>
          <Card.Text
            className={`${
              task.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {task.title}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
