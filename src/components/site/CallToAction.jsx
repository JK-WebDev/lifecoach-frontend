import { Component } from "react";

class CallToAction extends Component {
  render() {
    const { children } = this.props;

    return (
      <div
        className="row align-items-center text-center text-white"
        style={{
          height: "180px",
          background: "url(/cta.jpg)",
          backgroundPosition: "55% 32.5%",
          boxShadow: "0px 6px 6px rgba(0, 0, 0, .25)",
        }}
      >
        <h2
          className="fs-3"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {children}
        </h2>
      </div>
    );
  }
}

export default CallToAction;
