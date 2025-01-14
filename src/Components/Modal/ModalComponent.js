import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useFormikContext } from "formik";

const ModalComponent = (props) => {
  const { dirty, isValid } = useFormikContext();

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
        {props.formType === "add" ? (
          <>
            <Button variant="secondary" onClick={props.onCancel}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="foo"
              onClick={props.doSubmit}
              disabled={!(isValid && dirty)}>
              Save Changes
            </Button>
          </>
        ) : (
          <></>
        )}

        {props.formType === "edit" ? (
          <>
            <Button variant="secondary" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="foo"
              onClick={props.doSubmit}
              disabled={!(isValid && dirty)}>
              Save
            </Button>
          </>
        ) : (
          <></>
        )}

        {props.formType === "delete" ? (
          <>
            <Button variant="secondary" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="foo"
              onClick={props.doSubmit}>
              Confirm
            </Button>
          </>
        ) : (
          <></>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
