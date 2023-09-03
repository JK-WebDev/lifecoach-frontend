import { Component } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import NoteListItem from "./NoteListItem";

export default class NoteList extends Component {
  render() {
    const {
      props: { notes, setSelectedNote, handleDeleteNote },
    } = this;

    const strings = {
      notesTitle: "My Notes:",
      addNoteBtnText: "Add a note",
      noNotes: `This task doesn't have any notes yet. \u{1F614}
      You should probably add some and get this task movin' along.`,
    };

    return (
      <>
        <h3 className="fs-6">{strings.notesTitle}</h3>
        {notes?.length > 0 ? (
          notes?.map((note) => (
            <NoteListItem
              key={note}
              note={note}
              setSelectedNote={setSelectedNote}
              handleDeleteNote={handleDeleteNote}
            />
          ))
        ) : (
          <Col>{strings.noNotes}</Col>
        )}
        <Button
          size="sm"
          className="mt-2 mb-2 me-auto"
          onClick={() => setSelectedNote("")}
        >
          {strings.addNoteBtnText}
        </Button>
      </>
    );
  }
}