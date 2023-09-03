import { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import NoteList from "./NoteList";

export default class TaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: this.props.selectedTask?.isCompleted,
    };
  }

  handleDeleteTask = () => {
    const { _id } = this.props.selectedTask;
    this.props.deleteTask(_id);
    this.props.handleClose();
  };

  handleCompleteTask = ({ target }) => {
    const { checked: isCompleted } = target;
    console.log({ isCompleted });
    const _id = this.props.selectedTask._id;
    this.props.updateTask({ _id, isCompleted });
    this.setState({ isCompleted });
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedTask !== prevProps.selectedTask) {
      const { isCompleted } = this.props.selectedTask || {};
      this.setState({
        isCompleted,
      });
    }
  }

  handleClose = () => {
    this.props.setSelectedTask();
  };

  render() {
    const strings = {
      title: "Life Improvement Task",
      taskTitleLabel: "Task:",
      statusLabel: "Status:",
      finishedLabel: "All done?",
      taskComplete: "You did it! \u{1F389} Congrats! \u{1F973}",
      taskInProgress: "Work in progress \u{1F4AA}",
      newNoteBtnText: "Add a new note",
      deleteTaskBtnText: "Delete this task",
    };
    const {
      props: { selectedTask, updateTask },
      state: { isCompleted },
      handleDeleteTask,
      handleCompleteTask,
      handleClose,
    } = this;
    const shouldShowModal = Boolean(selectedTask);

    return (
      <Modal show={shouldShowModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{strings.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <Col md={6}>
            <Row className="mb-2">
              <Col className="fs-6 fw-semibold" sm={2}>
                {strings.taskTitleLabel}
              </Col>
              <Col>{selectedTask?.title}</Col>
            </Row>
            <Row>
              <Col className="fs-6 fw-semibold" sm={2}>
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
                />
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <NoteList notes={selectedTask?.notes} updateTask={updateTask} />
          </Col>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <Button variant="danger" onClick={handleDeleteTask} size="sm">
            {strings.deleteTaskBtnText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
