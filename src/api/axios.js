"use strict";

import axios from "axios";

// methods are async, but are not awaited, so they will need to be awaited at call or chained with .then to handle the promise

const REQ_TIMEOUT = 15000;

const api = {};

const generateConfig = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
  timeout: REQ_TIMEOUT,
});

api.queryPost = async (query, token) => {
  const route = "/query";
  const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
  const config = generateConfig(token);
  return axios.post(url, { query }, config);
};

api.taskGet = async (token) => {
  const route = "/task";
  const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
  const config = generateConfig(token);
  return axios.get(url, config);
};

api.taskPost = async (task, token) => {
  const route = "/task";
  const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
  const config = generateConfig(token);
  return axios.post(url, task, config);
};

api.taskPatch = async (id, task, token) => {
  const route = `/task/${id}`;
  const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
  const config = generateConfig(token);
  return axios.patch(url, task, config);
};

api.taskDelete = async (id, token) => {
  const route = `/task/${id}`;
  const url = `${import.meta.env.VITE_SERVER_URL}${route}`;
  const config = generateConfig(token);
  axios.delete(url, config);
};

api.message = {
  error: {
    queryPost:
      "There was an unexpected error with your request. Please try again.",
    taskGet: "There was an issue retrieving your task list.",
    taskPost: "There was an issue adding the task to your list.",
    taskPatch: "There was an issue updating your task. Please try again.",
    taskDelete: "There was an issue deleting your task. Please try again.",
  },
  success: {
    taskPost: "Your task was added successfully!",
    taskPatch: "Your task has been updated successfully!",
    taskDelete: "Your task has been successfully deleted!",
  },
};

export default api;
