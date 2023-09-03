/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import api from "../api/axios";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  PromptInput,
  ResponseCard,
  TaskList,
  ToastMessage,
  TaskModal,
} from "../components";

export default withAuth0(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        generatedResponse: null,
        tasks: [],
        selectedTask: null,
        toastMsg: null,
      };
    }

    getToken = () => {
      return this.props.auth0
        .getIdTokenClaims()
        .then((res) => res.__raw)
        .catch((err) => console.error(err));
    };

    getGeneratedTask = async (query) => {
      const config = await this.getConfig();
      api
        .queryPost(query, config)
        .then(({ data }) => this.updateGeneratedResponse(data))
        .catch(() =>
          this.setToastMsg({
            text: api.message.error.queryPost,
            type: "error",
          })
        );
    };

    updateGeneratedResponse = (generatedResponse = null) => {
      this.setState({ generatedResponse });
    };

    getTasks = async () => {
      const jwt = await this.getToken();
      api
        .taskGet(jwt)
        .then(({ data: tasks }) =>
          this.setState({ tasks, generatedResponse: null })
        )
        .catch(() =>
          this.setToastMsg({ text: api.message.error.taskGet, type: "error" })
        );
    };

    componentDidMount() {
      this.getTasks();
    }

    addNewTask = async () => {
      const jwt = await this.getToken();
      const newTask = {
        title: this.state.generatedResponse.task,
        isCompleted: false,
        notes: [],
      };
      api
        .taskPost(newTask, jwt)
        .then(() => this.getTasks())
        .then(() =>
          this.setToastMsg({
            text: api.message.success.taskPost,
            type: "success",
          })
        )
        .catch(() =>
          this.setToastMsg({
            text: api.message.error.taskPost,
            type: "error",
          })
        );
    };

    updateTask = async (updatedTask) => {
      console.log("UPDATE CALLED!");
      const jwt = await this.getToken();
      api
        .taskPatch(updatedTask._id, updatedTask, jwt)
        .then(() => this.getTasks())
        .then(() =>
          this.setToastMsg({
            text: api.message.success.taskPatch,
            type: "success",
          })
        )
        .catch(() =>
          this.setToastMsg({ text: api.message.error.taskPatch, type: "error" })
        );
    };

    deleteTask = async (deleteId) => {
      const route = `/task/${deleteId}`;
      const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
      const config = await this.getConfig();
      axios
        .delete(url, config)
        .then(() => this.getTasks())
        .then(() =>
          this.setToastMsg({
            text: api.message.success.taskDelete,
            type: "success",
          })
        )
        .catch(() =>
          this.setToastMsg({
            text: api.message.error.taskDelete,
            type: "error",
          })
        );
    };

    setSelectedTask = (selectedTask = null) => {
      this.setState({ selectedTask });
    };

    setToastMsg = (toastMsg = null) => {
      this.setState({ toastMsg });
    };

    render() {
      const strings = {
        instructionText:
          "Enter your question below to receive an actionable task from Uncle Jimmy",
      };

      const {
        state: { generatedResponse, tasks, toastMsg },
        getGeneratedTask,
        updateGeneratedResponse,
        addNewTask,
        updateTask,
        deleteTask,
        setSelectedTask,
        setToastMsg,
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
          <TaskList tasks={tasks} setSelectedTask={setSelectedTask} />
          <TaskModal
            selectedTask={this.state.selectedTask}
            setSelectedTask={setSelectedTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
          <ToastMessage toastMsg={toastMsg} setToastMsg={setToastMsg} />
        </>
      );
    }
  }
);
