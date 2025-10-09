import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as DIALOGSIZES from "constants/DialogSize";
import ModalComponent from "../Modal/ModalComponent";
import SocialLinksAddForm from "./SocialLinksAddForm";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

const SocialLinksAdd = (props) => {
  const [platformData, setPlatformData] = useState([]);
  
  useEffect(() => {
    setPlatformData(props.platformsData);
  }, [props.platformsData]);

  return (
    <>
      <Formik
        initialValues={{
          platformName: "",
          profileUrl: "",
          displayName: "",
        }}
        validationSchema={Yup.object({
          platformName: Yup.string().required("Social media platform name is required"),
          profileUrl: Yup.string().required("Profile URL is required"),
          displayName: Yup.string().required("Display name for the social media"),
        })}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>
        <ModalComponent
          size={dialogWidth}
          show={props.show}
          modalTitle="Social Link - Add"
          modalBody={<SocialLinksAddForm platforms={platformData} />}
          onCancel={props.onCancel}
          formType="add"
        />
      </Formik>
    </>
  );
}

export default SocialLinksAdd;