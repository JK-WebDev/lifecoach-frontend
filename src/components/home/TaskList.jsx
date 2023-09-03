import { Component } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Spinner from "react-bootstrap/Spinner";

import TaskListItem from "./TaskListItem";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowList: false,
    };
  }

  toggleListVisibile = () => {
    if (this.props.tasks.length === 0) this.props.getTasks();
    this.setState({ shouldShowList: !this.state.shouldShowList });
  };

  render() {
    const {
      props: { tasks, setSelectedTask, isLoading },
      state: { shouldShowList },
      toggleListVisibile,
    } = this;

    const strings = {
      buttonLabel: "View my tasks",
      listHeader: "My Life Improvement Tasks",
      noTasksLabel: "No Tasks! \u{1F633}",
      noTasksMsg:
        "Oh, so you think you're too good for my life-changing advice? \u{1F974} Alright, fine! I guess you're just floating through life without a care in the world. \u{1F913} Good for you! Let me know when you're ready to get started with some tasks.",
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
          {isLoading && (
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              role="status"
              className="ms-2 my-auto"
            />
          )}
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
            {tasks?.length > 0 ? (
              tasks.map((task) => (
                <TaskListItem
                  key={task._id}
                  task={task}
                  setSelectedTask={setSelectedTask}
                />
              ))
            ) : (
              <>
                <h3 className="fs-6 my-4">{strings.noTasksLabel}</h3>
                <p>{strings.noTasksMsg}</p>
              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
