import { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import TaskModalDetails from "./TaskModalDetails";
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

  handleCompleteTask = () => {
    const { _id } = this.props.selectedTask;
    this.setState((prevState) => {
      const isCompleted = !prevState.isCompleted;
      this.props.updateTask({ _id, isCompleted });
      return { isCompleted };
    });
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
      newNoteBtnText: "Add a new note",
      completeTaskBtn: "Mark complete",
      unCompleteTaskBtn: "Unmark complete",
      deleteTaskBtnText: "Delete task",
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
          <TaskModalDetails
            selectedTask={selectedTask}
            isCompleted={isCompleted}
          />
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
          <Button variant="outline-danger" onClick={handleDeleteTask} size="sm">
            {strings.deleteTaskBtnText}
          </Button>
          <Button
            variant={isCompleted ? "outline-success" : "success"}
            onClick={handleCompleteTask}
            size="sm"
            className="d-flex flex-row gap-2"
          >
            <Form.Check
              id="isCompleted"
              defaultChecked={isCompleted}
              checked={isCompleted}
              size="lg"
              style={{ whiteSpace: "pre-wrap" }}
              disabled
            />
            {isCompleted ? strings.unCompleteTaskBtn : strings.completeTaskBtn}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
