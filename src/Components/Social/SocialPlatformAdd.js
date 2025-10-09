import { Formik } from "formik";
import * as Yup from "yup";
import * as DIALOGSIZES from 'constants/DialogSize';
import ModalComponent from "../Modal/ModalComponent";
import SocialPlatformAddForm from "./SocialPlatformAddForm";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

const urlRegEx = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/;

const SocialPlatformAdd = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          platformName: "",
          baseUrl: ""
        }}
        validationSchema={Yup.object({
          platformName: Yup.string().min(1, "Social media platform name must be 1 character or more").required("Social media platform name is required"),
          baseUrl: Yup.string().matches(urlRegEx, "Enter a valid website URL starting with http:// or https:// and including a domain and TLD.")
        })}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>

        <ModalComponent
          size={dialogWidth}
          show={props.show}
          modalTitle="Social Platform - Add"
          modalBody={<SocialPlatformAddForm />}
          onCancel={props.onCancel}
          formType="add"
        />
      </Formik>
    </>
  )
}

export default SocialPlatformAdd