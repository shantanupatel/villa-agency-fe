import React from "react";
import Toast from "react-bootstrap/Toast";

const ToastComponent = (props) => {
  return (
    <React.Fragment>
      <Toast
        bg={props.bg ? props.bg : "light"}
        show={props.show}
        onClose={props.handleToastClose}
        delay={props.delay ? props.delay : 10000}
        autohide={props.autohide ? props.autohide : false}>
        <Toast.Header>
          <span className="me-auto">{props.header}</span>
        </Toast.Header>
        <Toast.Body>{props.body}</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

export default ToastComponent;
