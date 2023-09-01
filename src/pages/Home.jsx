import { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { PromptInput, ResponseCard } from "../components";

export default class Home extends Component {
  render() {
    const strings = {
      instructionText:
        "Enter your question below to receive an actionable task from Uncle Jimmy",
    };

    return (
      <>
        <Container className="text-center container-md">
          <Col>
            <Row>
              <h1 className="fs-5">{strings.instructionText}</h1>
            </Row>
            <Row className="my-3">
              <PromptInput />
            </Row>
            <Row>
              <ResponseCard />
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}
