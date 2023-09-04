import { Component } from "react";
import "./TaskListItem.css";
import Time from "../../utilities/time";

import Card from "react-bootstrap/Card";

export default class TaskListItem extends Component {
  render() {
    const { task, setSelectedTask } = this.props;
    const createdAtTimeAgo = Time.getTimeAgo(task.createdAt);
    console.log({ createdAtTimeAgo });

    return (
      <Card
        className={`mb-2 ${task.isCompleted ? "completed" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedTask(task)}
      >
        <Card.Body>
          <Card.Text
            className={`d-flex flex-column justify-content-end ${
              task.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {task.title}
            <p
              className="mt-1 mb-0 ms-auto text-black-50"
              style={{ fontSize: ".75rem" }}
            >
              {`Added ${createdAtTimeAgo}`}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
