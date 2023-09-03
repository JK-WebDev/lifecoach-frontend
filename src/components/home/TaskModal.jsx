import { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default class TaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: this.props.selectedTask?.isCompleted,
      selectedNote: null,
    };
  }

  setSelectedNote = (selectedNote = null) => {
    this.setState({ selectedNote });
  };

  handleDeleteTask = () => {
    const { _id } = this.props.selectedTask;
    this.props.deleteTask(_id);
  };

  handleCompleteTask = ({ target }) => {
    const { checked: isCompleted } = target;
    const { _id } = this.props.selectedTask;
    this.props.updateTask({ _id, isCompleted });
    this.setState({ isCompleted });
  };

  handleAddNote = (newNote) => {
    const { _id, notes: prevNotes } = this.props.selectedTask;
    const notes = [...prevNotes, newNote];
    this.props.updateTask({ _id, notes });
  };

  handleEditNote = (prevNote, updateNote) => {
    const { _id, notes: prevNotes } = this.props.selectedTask;
    const notes = prevNotes.map((note) =>
      note === prevNote ? updateNote : note
    );
    this.props.updateTask({ _id, notes });
  };

  handleDeleteNote = (deleteNote) => {
    const { _id, notes: prevNotes } = this.props.selectedTask;
    const notes = prevNotes.filter((note) => note !== deleteNote);
    this.props.updateTask({ _id, notes });
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedTask !== prevProps.selectedTask) {
      const { isCompleted } = this.props.selectedTask || {};
      this.setState({
        isCompleted,
        selectedNote: null,
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
      taskComplete: "DONE! You did it! \u{1F389} Congrats! \u{1F973}",
      taskInProgress: "In progress... \u{1F4AA}",
      newNoteBtnText: "Add a new note",
      deleteTaskBtnText: "Delete this task",
    };
    const {
      props: { selectedTask },
      state: { isCompleted, selectedNote },
      setSelectedNote,
      handleDeleteTask,
      handleCompleteTask,
      handleAddNote,
      handleEditNote,
      handleDeleteNote,
      handleClose,
    } = this;
    const shouldShowModal = selectedTask !== null;
    const shouldShowForm = selectedNote !== null;
    const formMode = selectedNote?.length > 0 ? "edit" : "add";

    return (
      <Modal show={shouldShowModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{strings.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <Col md={4} className="border-end">
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

          <Col md={8} className="d-flex flex-column justify-content-between">
            {shouldShowForm ? (
              <NoteForm
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
                formMode={formMode}
                handleAddNote={handleAddNote}
                handleEditNote={handleEditNote}
              />
            ) : (
              <NoteList
                notes={selectedTask?.notes}
                setSelectedNote={setSelectedNote}
                handleDeleteNote={handleDeleteNote}
              />
            )}
          </Col>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button variant="danger" onClick={handleDeleteTask} size="sm">
            {strings.deleteTaskBtnText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
