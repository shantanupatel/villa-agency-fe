import { useState, useEffect } from "react";
import { Field, useFormikContext, ErrorMessage } from "formik";
import { State, City } from "country-state-city";

export const AddressEditForm = (props) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState(null);

  const { values, handleChange, handleSubmit } = useFormikContext();

  // current values from Formik
  const { id, country, state, city, street, zip } = values;

  useEffect(() => {
    // filtered array of objects, can be array of numbers
    // setLevelOptions(items.filter((item) => item.country === country));
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
    <>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            name="id"
            value={id}
            className="form-control"
            type="hidden"></Field>
        </div>

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
    </>
  );
};
