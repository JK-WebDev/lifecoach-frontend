import { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class NoteList extends Component {
  render() {
    const { note } = this.props;
    const strings = {
      editBtnIcon: "\u{270F}",
      editBtnText: "Edit",
      deleteBtnIcon: "\u{1F5D1}",
      deleteBtnText: "Delete",
    };

    return (
      <Card className="mb-2">
        <Card.Body>
          <Card.Text>{note}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end gap-2">
          <Button variant="success" size="sm">
            {strings.editBtnIcon}
            &nbsp; &nbsp;
            {strings.editBtnText}
          </Button>
          <Button variant="secondary" size="sm">
            {strings.deleteBtnIcon}
            &nbsp; &nbsp;
            {strings.deleteBtnText}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
