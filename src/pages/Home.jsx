/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { PromptInput, ResponseCard, TaskList } from "../components";

export default withAuth0(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        generatedResponse: null,
        tasks: [],
      };
    }

    getToken = () => {
      return this.props.auth0
        .getIdTokenClaims()
        .then((res) => res.__raw)
        .catch((err) => console.error(err));
    };

    getGeneratedTask = async (query) => {
      const route = "/query";
      const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
      const jwt = await this.getToken();
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      axios
        .post(url, { query }, config)
        .then(({ data }) => this.updateGeneratedResponse(data))
        //TODO Implement error handling
        .catch((err) => console.error(err));
    };

    updateGeneratedResponse = (generatedResponse = null) => {
      this.setState({ generatedResponse });
    };

    getTasks = async () => {
      const route = "/task";
      const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
      const jwt = await this.getToken();
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      axios
        .get(url, config)
        .then(({ data: tasks }) => this.setState({ tasks }))
        //TODO Implement error handling
        .catch((err) => console.error(err));
    };

    componentDidMount() {
      this.getTasks();
    }

    render() {
      const strings = {
        instructionText:
          "Enter your question below to receive an actionable task from Uncle Jimmy",
      };

      const {
        getGeneratedTask,
        updateGeneratedResponse,
        state: { generatedResponse, tasks },
      } = this;

      return (
        <>
          <Container className="text-center container-md">
            <Col>
              <Row>
                <h1 className="fs-5">{strings.instructionText}</h1>
              </Row>
              <Row className="my-3">
                <PromptInput getGeneratedTask={getGeneratedTask} />
              </Row>
              {generatedResponse && (
                <Row>
                  <ResponseCard
                    generatedResponse={generatedResponse}
                    updateGeneratedResponse={updateGeneratedResponse}
                  />
                </Row>
              )}
            </Col>
          </Container>
          <TaskList tasks={tasks} />
        </>
      );
    }
  }
);
