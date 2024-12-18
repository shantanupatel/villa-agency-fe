import { useState, useEffect } from "react";
import { Field, useFormikContext, ErrorMessage } from "formik";
import { State, City } from "country-state-city";

const AddressAddForm = (props) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState(null);

  const {
    values,
    handleChange,
    // setFieldValue,
    handleSubmit,
    isSubmitting,
    isValid, // will work with validation schema or validate fn defined
  } = useFormikContext();

  // current values from Formik
  const { country, state, city, street, zip } = values;

  //  calculated ususally on every render
  //
  // const countryOptions = Array.from(new Set(items.map(item => item.country)));
  // const levelOptions = items.filter(item => item.country === country);
  //
  //  converted into hooks (useState and useEffect)
  //
  useEffect(() => {
    // filtered array of objects, can be array of numbers
    // setLevelOptions(items.filter((item) => item.country === country));
    // console.log(country);
    // console.log(st);
    setStates(State.getStatesOfCountry(country));
    setCities(City.getCitiesOfCountry(country, state));
  }, [country, state]); // recalculated on country [or items] change

  function handleCountryChange(e) {
    handleChange(e); // update country

    setSelectedState(null);
    setSelectedCity(null);
  }

  function handleStateChange(e) {
    // console.log(e.target.value);
    setSelectedState(selectedState);

    handleChange(e); // update country
    setSelectedCity(null);
  }

  function handleCityChange(e) {
    setSelectedCity(selectedCity);

    handleChange(e);
  }

  return (
    <div>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <Field
            as="select"
            name="country"
            value={country}
            placeholder="Select Country"
            className="form-control"
            onChange={handleCountryChange}>
            {!country && (
              <option key="0" value="">
                Select Country
              </option>
            )}
            {props.countries &&
              props.countries.map((country) => (
                <option value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </option>
              ))}
          </Field>
          <ErrorMessage name="country" component="div" />
        </div>

        {/* {JSON.stringify(states)} */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <Field
            as="select"
            name="state"
            value={state}
            className="form-control"
            onChange={handleStateChange}>
            {!state && (
              <option key="0" value="">
                Select State
              </option>
            )}
            {states &&
              states.map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
          </Field>
          <ErrorMessage name="state" component="div" />
        </div>

        {/* {JSON.stringify(cities)} */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <Field
            as="select"
            name="city"
            value={city}
            className="form-control"
            onChange={handleCityChange}>
            {!city && <option key="0">Select City</option>}
            {cities &&
              cities.map((city) => (
                <option value={city.isoCode} key={city.isoCode}>
                  {city.name}
                </option>
              ))}
          </Field>
          <ErrorMessage name="city" component="div" />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street</label>
          <Field
            name="street"
            value={street}
            placeholder="Street"
            className="form-control"></Field>
          <ErrorMessage name="street" component="div" />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <Field
            name="zip"
            value={zip}
            placeholder="Zip code"
            className="form-control"></Field>
          <ErrorMessage name="zip" component="div" />
        </div>
      </form>
      {/* <>
        <h1>values</h1>
        {country && country}
        <br />
        {st && st}
        <br />
        {city && city}
      </> */}
    </div>
  );
};

export default AddressAddForm;
