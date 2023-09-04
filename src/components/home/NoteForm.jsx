import { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateNote: this.props.selectedNote,
    };
  }

  handleTextInput = ({ target: { value: updateNote } }) => {
    this.setState({ updateNote });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedNote } = this.props;
    const { updateNote } = this.state;

    if (this.props.formMode === "edit") {
      this.props.handleEditNote(selectedNote, updateNote);
    } else {
      this.props.handleAddNote(updateNote);
    }

    this.handleFormClose();
  };

  handleFormClose = () => {
    this.props.setSelectedNote();
  };

  render() {
    const {
      props: { formMode },
      state: { updateNote },
      handleTextInput,
      handleSubmit,
    } = this;

    const strings = {
      addNoteLabel: "New note:",
      editNoteLabel: "Update note:",
      saveBtnText: "Save Note",
      cancelBtnText: "Discard Changes",
    };

    const saveBtnDisabled = updateNote.length < 1;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="note">
          <Form.Label>{strings[`${formMode}NoteLabel`]}</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={this.state.updateNote}
            onInput={handleTextInput}
            required
            className="mb-2"
          />
        </Form.Group>
        <Col className="d-flex justify-content-end">
          <Button
            variant="primary"
            size="sm"
            type="submit"
            className="me-2"
            disabled={saveBtnDisabled}
          >
            {strings.saveBtnText}
          </Button>
          <Button variant="secondary" size="sm" onClick={this.handleFormClose}>
            {strings.cancelBtnText}
          </Button>
        </Col>
      </Form>
    );
  }
}
