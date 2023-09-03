import { Component } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import TaskListItem from "./TaskListItem";
import TaskModal from "./TaskModal";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowList: false,
      selectedTask: null,
    };
  }

  toggleListVisibile = () => {
    this.setState({ shouldShowList: !this.state.shouldShowList });
  };

  setSelectedTask = (selectedTask = null) => {
    this.setState({ selectedTask });
  };

  render() {
    const {
      props: { tasks, updateTask, deleteTask },
      state: { shouldShowList, selectedTask },
      toggleListVisibile,
      setSelectedTask,
    } = this;

    const strings = {
      buttonLabel: "View my tasks",
      listHeader: "My Life Improvement Tasks",
    };

    return (
      <>
        <Button
          onClick={toggleListVisibile}
          className="fixed-bottom w-25 ms-auto"
          style={{ bottom: "75px", right: "20px" }}
          size="lg"
        >
          {strings.buttonLabel}
        </Button>
        <Offcanvas
          show={shouldShowList}
          onHide={toggleListVisibile}
          keyboard
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{strings.listHeader}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {tasks?.length > 0 &&
              tasks.map((task) => (
                <TaskListItem
                  key={task._id}
                  task={task}
                  setSelectedTask={setSelectedTask}
                />
              ))}
          </Offcanvas.Body>
        </Offcanvas>
        <TaskModal
          selectedTask={selectedTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          handleClose={setSelectedTask}
        />
      </>
    );
  }
}
