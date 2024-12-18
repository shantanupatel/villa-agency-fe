// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ButtonComponent from "./UI/ButtonComponent";
import "./ContactFormComponent.scss";
import * as Yup from "yup";
// import axios from "axios";

const initialValues = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
  source: "Web",
};

const schema = Yup.object().shape({
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
});

const handleSubmit = async (values) => {
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
};

const ContactFormComponent = () => {
  return (
    <div className="contact-us-form">
      <Formik
        initialValues={initialValues}
        /* validate={(values) => {
          const errors = {};

          if (!values.fullName) {
            errors.fullName = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }} */
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          // console.log("Submitting form");
          // console.log(values);
          /* setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));

            try {
              const response = await axios.post(
                process.env.REACT_APP_API_URL + "/enquiries",
                values
              );
              console.log("Form data submitted successfully: ", response.data);
            } catch (error) {
              console.error(error);
            }

            setSubmitting(false);
          }, 400); */
          handleSubmit(values);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <Field
                type="text"
                name="fullname"
                placeholder="Your Name..."
                className="form-control"
              />
              <ErrorMessage name="fullname" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Your E-mail..."
                className="form-control"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <Field
                type="subject"
                name="subject"
                placeholder="Subject..."
                className="form-control"
              />
              <ErrorMessage name="subject" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field
                type="message"
                name="message"
                className="form-control"
                as="textarea"
                placeholder="Your Message"
              />
              <ErrorMessage name="message" component="div" />
            </div>
            <div className="form-group">
              {/* <label htmlFor="source">source</label> */}
              <Field
                type="hidden"
                name="source"
                className="form-control"
                as="textarea"
                placeholder="Your Message"
                hidden
              />
              <ErrorMessage name="message" component="div" />
            </div>
            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}

            <ButtonComponent variant="secondary" title="Submit" type="submit" />
          </Form>
        )}
      </Formik>
      {/* <div className="contact-us-form-item">
                <h4>250 m2</h4>
                Total Flat Space
              </div> */}
    </div>
  );
};

export default ContactFormComponent;
