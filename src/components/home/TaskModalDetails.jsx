import { Component } from "react";

import Time from "../../utilities/time";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class TaskModal extends Component {
  render() {
    const strings = {
      taskTitleLabel: "Task:",
      statusLabel: "Status:",
      finishedLabel: "All done?",
      updatedLabel: "Updated:",
      createdLabel: "Created:",
      taskComplete: "Done! \u{1F389} You did it! \u{1F973}",
      taskInProgress: "Workin' on it... \u{1F605}",
    };
    const {
      props: { selectedTask, isCompleted, handleCompleteTask },
    } = this;
    const labelColSize = { sm: 12, md: 12, lg: 4 };

    return (
      <Col md={4} className="d-flex flex-column border-end">
        <Row className="mb-2">
          <Col
            className="fs-6 fw-semibold"
            sm={labelColSize.sm}
            md={labelColSize.md}
            lg={labelColSize.lg}
          >
            {strings.taskTitleLabel}
          </Col>
          <Col>{selectedTask?.title}</Col>
        </Row>
        <Row>
          <Col
            className="fs-6 fw-semibold"
            sm={labelColSize.sm}
            md={labelColSize.md}
            lg={labelColSize.lg}
          >
            {strings.statusLabel}
          </Col>
          <Col>
            <Form.Check
              id="isCompleted"
              label={
                isCompleted ? strings.taskComplete : strings.taskInProgress
              }
              defaultChecked={isCompleted}
              checked={isCompleted}
              onChange={handleCompleteTask}
              size="lg"
              style={{ whiteSpace: "pre-wrap" }}
            />
          </Col>
        </Row>
        <Row className="flex-grow-1"></Row>
        <Row>
          <Col
            className="fs-6 fw-semibold"
            sm={labelColSize.sm}
            md={labelColSize.md}
            lg={labelColSize.lg}
          >
            {strings.updatedLabel}
          </Col>
          <Col>{Time.getTimeAgo(selectedTask?.updatedAt)}</Col>
        </Row>
        <Row>
          <Col
            className="fs-6 fw-semibold"
            sm={labelColSize.sm}
            md={labelColSize.md}
            lg={labelColSize.lg}
          >
            {strings.createdLabel}
          </Col>
          <Col>{Time.getReadable(selectedTask?.createdAt)}</Col>
        </Row>
      </Col>
    );
  }
}
