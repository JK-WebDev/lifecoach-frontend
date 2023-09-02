/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { PromptInput, ResponseCard, TaskList } from "../components";

const REQ_TIMEOUT = 10000;

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

    getConfig = async () => {
      const jwt = await this.getToken();
      return {
        headers: { Authorization: `Bearer ${jwt}` },
        timeout: REQ_TIMEOUT,
      };
    };

    getGeneratedTask = async (query) => {
      const route = "/query";
      const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
      const config = await this.getConfig();
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
      const config = await this.getConfig();
      axios
        .get(url, config)
        .then(({ data: tasks }) =>
          this.setState({ tasks, generatedResponse: null })
        )
        //TODO Implement error handling
        .catch((err) => console.error(err));
    };

    componentDidMount() {
      this.getTasks();
    }

    addNewTask = async () => {
      const route = "/task";
      const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
      const config = await this.getConfig();
      const newTask = {
        title: this.state.generatedResponse.task,
        isCompleted: false,
        notes: [],
      };
      axios
        .post(url, newTask, config)
        .then(() => this.getTasks())
        //TODO Implement error handling
        .catch((err) => console.error(err));
    };

    render() {
      const strings = {
        instructionText:
          "Enter your question below to receive an actionable task from Uncle Jimmy",
      };

      const {
        state: { generatedResponse, tasks },
        getGeneratedTask,
        updateGeneratedResponse,
        addNewTask,
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
                    addNewTask={addNewTask}
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
