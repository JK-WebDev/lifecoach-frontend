import { Component } from "react";

import NoteListItem from "./NoteListItem";

export default class NoteList extends Component {
  render() {
    const { notes } = this.props;
    return (
      <>
        {notes?.map((note) => (
          <NoteListItem key={note} note={note} />
        ))}
      </>
    );
  }
}
