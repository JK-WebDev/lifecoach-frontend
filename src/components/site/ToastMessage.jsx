import { Component } from "react";

import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

const TOAST_TIMEOUT = 5000;

export default class ToastMessage extends Component {
  render() {
    const {
      props: { toastMsg, setToastMsg },
    } = this;
    const shouldShowToast = Boolean(toastMsg);
    const background = toastMsg?.type === "error" ? "danger" : "success";
    const zIndex = 10000;

    return (
      <ToastContainer
        className="p-3 mb-5"
        position="bottom-center"
        style={{ zIndex }}
      >
        <Toast
          bg={background}
          show={shouldShowToast}
          delay={TOAST_TIMEOUT}
          autohide
          onClose={() => setToastMsg()}
        >
          <Toast.Body className="text-white text-center">
            {toastMsg?.text}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }
}
