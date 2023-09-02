import { Component } from "react";

import Card from "react-bootstrap/Card";

export default class TaskListItem extends Component {
  render() {
    const {
      task: { title },
    } = this.props;

    return (
      <Card className="mb-2" style={{ cursor: "pointer" }}>
        <Card.Body>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
