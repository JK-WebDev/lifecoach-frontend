import { Component } from "react";

import Card from "react-bootstrap/Card";

export default class ResponseCard extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>This is a response placeholder</Card.Title>
          <Card.Text>This is an actionable task placeholder</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
