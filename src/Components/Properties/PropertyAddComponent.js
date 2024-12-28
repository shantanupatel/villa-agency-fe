import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropertyAddForm from "./PropertyAddForm";

const PropertyAddComponent = (props) => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          type: { selectedOption: "Select" },
          listingPrice: "",
          bedroom: "",
          bathroom: "",
          area: "",
          floor: "",
          parkingAvailable: false,
          parkingSpot: 1,
          isFeatured: false,
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Property Name is required"),
          type: Yup.string().required("Property type is required"),
          listingPrice: Yup.number().required("Listing price is required"),
          bedroom: Yup.string().required("Number of bedrooms is required"),
          bathroom: Yup.string().required("Number of bathrooms is required"),
          area: Yup.string().required("Area of property is required"),
          floor: Yup.string().required("Floor number is required"),
          parkingAvailable: Yup.boolean().required("Parking  available?"),
          parkingSpot: Yup.number().required(
            "Number of parking spots is required"
          ),
          isFeatured: Yup.string(),
          address: Yup.number().required("Select address for the property"),
        })}
        onSubmit={(values) => {
          props.doSubmit(values);
        }}>
        <PropertyAddForm />
      </Formik>
    </React.Fragment>
  );
};

export default PropertyAddComponent;
