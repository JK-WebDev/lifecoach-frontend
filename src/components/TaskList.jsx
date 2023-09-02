import { Component } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import TaskListItem from "./TaskListItem";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowList: false,
    };
  }

  toggleListVisibile = () => {
    this.setState({ shouldShowList: !this.state.shouldShowList });
  };

  render() {
    const {
      props: { tasks },
      state: { shouldShowList },
      toggleListVisibile,
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
        >
          {strings.buttonLabel}
        </Button>
        <Offcanvas
          show={shouldShowList}
          onHide={toggleListVisibile}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{strings.listHeader}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {tasks?.length > 0 &&
              tasks.map((task) => <TaskListItem key={task._id} task={task} />)}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}