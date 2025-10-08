import { useState } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import * as DIALOGSIZES from 'constants/DialogSize';
import ModalComponent from "../Modal/ModalComponent";
import SocialPlatformAddForm from "./SocialPlatformAddForm";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

const SocialPlatformAdd = (props) => {
  const [links, ] = useState([]);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required")
        })}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>

        <ModalComponent
          size={dialogWidth}
          show={props.show}
          modalTitle="Social Platform - Add"
          modalBody={<SocialPlatformAddForm links={links} />}
          onCancel={props.onCancel}
          formType="add"
        />
      </Formik>
    </>
  )
}

export default SocialPlatformAdd