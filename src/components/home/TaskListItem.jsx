import { Component } from "react";
import "./TaskListItem.css";
import Time from "../../utilities/time";

import Card from "react-bootstrap/Card";

export default class TaskListItem extends Component {
  render() {
    const { task, setSelectedTask } = this.props;
    const strings = {
      notesText: "notes",
    };
    const createdAtTimeAgo = Time.getTimeAgo(task.createdAt);

    return (
      <Card
        className={`mb-2 ${task.isCompleted ? "completed" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedTask(task)}
      >
        <Card.Body>
          <Card.Text as={"div"}>
            <p
              className={`mb-0 ${
                task.isCompleted ? "text-decoration-line-through" : ""
              }`}
            >
              {task.title}
            </p>

            <div className="d-flex justify-content-between">
              <p
                className="mt-1 mb-0 me-auto text-black-50"
                style={{ fontSize: ".75rem" }}
              >
                {task.notes?.length > 0 &&
                  `${task.notes.length} ${strings.notesText}`}
              </p>
              <p
                className="mt-1 mb-0 ms-auto text-black-50"
                style={{ fontSize: ".75rem" }}
              >
                {`Added ${createdAtTimeAgo}`}
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
