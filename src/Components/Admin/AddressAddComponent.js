import React, { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
import { Formik } from "formik";
import * as Yup from "yup";
import AddressAddForm from "./AddressAddForm";
import { Country } from "country-state-city";
import * as DIALOGSIZES from "constants/DialogSize";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

const AddressAddComponent = (props) => {
  const [countries, setCountries] = useState(Country.getAllCountries());

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          country: "",
          state: "",
          city: "",
          street: "",
          zip: "",
        }}
        validationSchema={Yup.object({
          country: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          street: Yup.string().required("Required"),
          zip: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>
        <ModalComponent
          size={dialogWidth}
          show={props.show}
          // loading={loading}
          modalTitle="Edit Address"
          modalBody={<AddressAddForm countries={countries} />}
          onCancel={props.onCancel}
          formType="add"
        />
      </Formik>
    </React.Fragment>
  );
};

export default AddressAddComponent;
