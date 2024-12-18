import React, { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
//   RegionSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddressAddFields from "./AddressAddFields";
import AddressAddForm from "./AddressAddForm";
import { Country } from "country-state-city";

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
        <AddressAddForm countries={countries} />
      </Formik>
    </React.Fragment>
  );
};

export default AddressAddComponent;
