import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const ModalComponent = (props) => {
  const [setShow] = useState(false);
  const handleClose = () => setShow(false);

  // console.log("Modal: ", props.show);

  return (
    <Modal
      size={props.size}
      show={props.show}
      centered
      scrollable={true}
      animation={true}
      onHide={props.onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.loading && (
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {props.modalBody}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          form="foo"
          onClick={props.doSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
