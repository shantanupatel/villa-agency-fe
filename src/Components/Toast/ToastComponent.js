import React from "react";
import Toast from "react-bootstrap/Toast";

const ToastComponent = (props) => {
  return (
    <React.Fragment>
      {/*
      bg: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
      position: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
       */}

      <Toast
        bg={props.bg ? props.bg : "light"}
        show={props.show}
        onClose={props.handleToastClose}
        delay={props.delay ? props.delay : 10000}
        autohide={props.autohide ? props.autohide : false}>
        <Toast.Header>
          {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
          <strong className="me-auto">{props.header}</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>{props.body}</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

export default ToastComponent;
