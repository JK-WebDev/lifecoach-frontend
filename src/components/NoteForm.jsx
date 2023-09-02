import { Component } from "react";

import Form from "react-bootstrap/Form";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: this.props.note,
    };
  }

  handleTextInput = ({ target: { value: noteText } }) => {
    this.setState({ noteText });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="note">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} value={this.state.noteText} />
        </Form.Group>
      </Form>
    );
  }
}
