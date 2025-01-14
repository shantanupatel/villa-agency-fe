import { Formik } from "formik";
import * as Yup from "yup";
import ModalComponent from "../Modal/ModalComponent";
import * as DIALOGSIZES from "constants/DialogSize";
import { AddressDeleteForm } from "./AddressDeleteForm";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

export const AddressDeleteComponent = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          id: props?.initialData.id,
        }}
        validationSchema={Yup.object({})}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>
        <ModalComponent
          size={dialogWidth}
          show={props.show}
          // loading={loading}
          modalTitle="Delete Address"
          modalBody={<AddressDeleteForm />}
          onCancel={props.closeModal}
          formType="delete"
        />
      </Formik>
    </>
  );
};
