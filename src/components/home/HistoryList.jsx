import { Component } from "react";

import History from "../../utilities/history";

import ListGroup from "react-bootstrap/ListGroup";

import HistoryListItem from "./HistoryListItem";

export default class HistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  handleDeleteEntry(deleteEntry) {
    const entries = History.deleteEntry(deleteEntry);
    this.setState({ entries });
  }

  handleAddNewTask(newTask) {
    this.props.addNewTask(newTask);
    this.handleDeleteEntry(newTask);
  }

  componentDidMount() {
    const entries = History.getEntries();
    this.setState({ entries });
  }

  componentDidUpdate(prevProps) {
    if (this.props.generatedResponse !== prevProps.generatedResponse) {
      const { generatedResponse } = this.props;
      const entries = History.saveEntry(generatedResponse);
      this.setState({ entries });
    }
  }

  render() {
    console.log(
      "response:",
      this.props.generatedResponse,
      "state:",
      this.state.entries
    );
    return (
      <ListGroup>
        {this.state.entries?.map((entry) => (
          <HistoryListItem
            key={entry?.task}
            entry={entry}
            handleDeleteEntry={this.handleDeleteEntry}
            handleAddNewTask={this.handleAddNewTask}
          />
        ))}
      </ListGroup>
    );
  }
}
