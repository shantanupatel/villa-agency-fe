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
  // const [region, setRegion] = useState("");
  // const [countryid, setCountryid] = useState(0);
  // const [stateid, setstateid] = useState(0);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  /* const initialValues = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    source: "Web",
  }; */

  const [countries, setCountries] = useState(Country.getAllCountries());
  // const [states, setStates] = useState(State.getStatesOfCountry(countries.iso));

  /* const schema = Yup.object().shape({
    fullname: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    subject: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    message: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
    source: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
  }); */

  /* const handleSubmit = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
      // body: values,
    };
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/enquiries",
        requestOptions
      );

      console.log("values: ", values);

      if (response.ok) {
        console.log("Form submitted", values);
      } else {
        console.error("An error occurred when submitting the form");
      }
    } catch (error) {
      console.error("An error occurred when submitting the form", error);
    }
  }; */

  /* function handleHide() {
    hideModal();
  } */

  /* function handleHideModal() {
    console.log("Modal closing");
  } */

  /* return (
    <div>
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        centered
        scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
              }}>
              {(isSubmitting) => (
                <Form>
                  <h6>Region / Continent</h6>
                  <RegionSelect
                    onChange={(e) => {
                      setRegion(e.name);
                    }}
                    placeHolder="Select Region"
                  />

                  <h6>Country</h6>
                  <CountrySelect
                    onChange={(e) => {
                      setCountryid(e.id);
                    }}
                    placeHolder="Select Country"
                    region={region}
                  />

                  <h6>State</h6>
                  <StateSelect
                    countryid={countryid}
                    onChange={(e) => {
                      setstateid(e.id);
                    }}
                    placeHolder="Select State"
                  />

                  <h6>City</h6>
                  <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e) => {
                      console.log(e);
                    }}
                    placeHolder="Select City"
                  />

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" placeholder="Street Name" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="Zip" />
                  </Form.Group>
                </Form>
              )}
              ;
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ); */

  // console.log(showModal);

  /* function handleFormSubmit(values) {
    console.log(values);
  }

  const doSubmit = (values) => {
    alert(JSON.stringify(values));
    setOpen(false);
  }; */

  /* const items = [
    { country: "USA", level: 1 },
    { country: "USA", level: 5 },
    { country: "Canada", level: 2 },
    { country: "Canada", level: 4 },
    { country: "Bangladesh", level: 2 },
    { country: "Bangladesh", level: 7 },
  ]; */

  // console.log("Props: ", props);

  return (
    <React.Fragment>
      {/* <AddressAddFields {...props} /> */}
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
