import { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default class HistoryListItem extends Component {
  render() {
    const {
      props: { entry, handleDeleteEntry, handleAddNewTask },
    } = this;

    return (
      <ListGroup.Item onClick={() => handleDeleteEntry(entry)}>
        {entry?.task}
      </ListGroup.Item>
    );
  }
}
