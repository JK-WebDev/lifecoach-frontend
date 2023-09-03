import { Component } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import NoteListItem from "./NoteListItem";
import NoteForm from "./NoteForm";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editNote: null,
    };
  }
  render() {
    const {
      props: { notes },
      state: { editNote },
    } = this;
    const strings = {
      addNoteBtnText: "Add a new note",
      noNotes:
        "This task doesn't have any notes yet. \u{1F614}\nYou should probably add some and get this task movin' along.",
    };

    return (
      <>
        {editNote ? (
          <NoteForm editNote={editNote} />
        ) : (
          <>
            <Button size="sm" className="mb-2 me-auto">
              {strings.addNoteBtnText}
            </Button>
            {notes?.length > 0 ? (
              notes?.map((note) => <NoteListItem key={note} note={note} />)
            ) : (
              <Col as="pre">{strings.noNotes}</Col>
            )}
          </>
        )}
      </>
    );
  }
}
