import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { AddressEditForm } from "./AddressEditForm";
import { Country } from "country-state-city";
import ModalComponent from "../Modal/ModalComponent";
import * as DIALOGSIZES from "constants/DialogSize";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

export const AddressEditComponent = (props) => {
  const [countries] = useState(Country.getAllCountries());

  console.log(props.initialData);

  return (
    <>
      <React.Fragment>
        <Formik
          initialValues={{
            id: props?.initialData.rowData.id,
            country: props?.initialData.rowData.country,
            state: props?.initialData.rowData.state,
            city: props?.initialData.rowData.city,
            street: props?.initialData.rowData.street,
            zip: props?.initialData.rowData.zip,
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
            modalTitle="Edit Address"
            modalBody={<AddressEditForm countries={countries} />}
            onCancel={props.closeModal}
            formType="edit"
          />
        </Formik>
      </React.Fragment>
    </>
  );
};
