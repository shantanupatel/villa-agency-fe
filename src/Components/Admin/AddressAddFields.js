import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
//   RegionSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";
import { Country, State, City } from "country-state-city";

const AddressAddFields = (props) => {
  const bagRef = useRef();

  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState();
  const [cities, setCities] = useState();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // console.log(countries);

  // console.log("Props: ", props);

  function handleCountryChange(country) {
    // console.log(country);
    // console.log(country.isoCode);
    setSelectedCountry(country.name);
    setStates(State.getStatesOfCountry(country.isoCode));
    // console.log(states);
  }

  function handleStateChange(state) {
    setSelectedState(state);
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  }

  function handleCityChange(city) {
    setSelectedCity(city);
  }

  return (
    <>
      {JSON.stringify(selectedCountry)}
      {/* {JSON.stringify(selectedState)}
      {JSON.stringify(selectedCity)} */}

      <Formik
        innerRef={bagRef}
        initialValues={{
          // region: "Asia",
          // country: "India",
          country: "",
          state: "",
          city: "",
          // fullname: "",
          // region: "",
        }}
        validationSchema={Yup.object({
          // region: Yup.string().required("Required"),
          // country: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          // fullname: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);

          const payload = {
            ...values,
          };

          console.log("Payload: ", payload);

          props.doSubmit(payload);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form id="foo">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Field
                as="select"
                name="country"
                // placeholder="Select Country"
                className="form-control"
                onChange={(e) =>
                  handleCountryChange(
                    countries.find((c) => c.isoCode === e.target.value)
                  )
                }>
                {countries &&
                  countries.map((country) => (
                    <option value={country.isoCode} key={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="country" component="div" />

              {/* <select
              name="country"
              component="select"
              onChange={(e) =>
                handleCountryChange(
                  countries.find((c) => c.isoCode === e.target.value)
                )
              }
              value={{ selectedCountry }}>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select> */}
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <Field
                as="select"
                name="state"
                // placeholder="Select Country"
                className="form-control"
                onChange={(e) =>
                  handleStateChange(
                    states.find((s) => s.isoCode === e.target.value)
                  )
                }>
                {states &&
                  states.map((state) => (
                    <option value={state.isoCode} key={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="state" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              {/* {JSON.stringify(cities)} */}
              <Field
                as="select"
                name="city"
                // placeholder="Select Country"
                className="form-control"
                onChange={(e) =>
                  handleCityChange(
                    cities.find((c) => c.isoCode === e.target.value)
                  )
                }>
                {cities &&
                  cities.map((city) => (
                    <option value={city.isoCode} key={city.isoCode}>
                      {city.name}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="city" component="div" />
            </div>

            {/* <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <Field
              type="text"
              name="fullname"
              placeholder="Your Name..."
              className="form-control"
            />
            <ErrorMessage name="fullname" component="div" />
          </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddressAddFields;
