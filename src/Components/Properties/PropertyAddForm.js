import { useEffect, useState } from "react";
import { Field, useFormikContext, ErrorMessage } from "formik";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { authHeader } from "services/auth-header";

const PropertyAddForm = () => {
  const { values, handleSubmit } = useFormikContext();

  // values received from formik
  const {
    name,
    type,
    listingPrice,
    bedroom,
    bathroom,
    area,
    floor,
    parkingAvailable,
    parkingSpot,
    isFeatured,
    address,
  } = values;

  const [addresses, setAddresses] = useState(null);
  const propertyType = [
    { value: "Apartment" },
    { value: "Luxury Villa" },
    { value: "Penthouse" },
  ];

  useEffect(() => {
    getListOfAddresses();
  }, []);

  const getListOfAddresses = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/addresses", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((response) => {
        setAddresses(response.data.data);
      });
  };

  return (
    <>
      <form id="foo" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="name">Property Name</label>
              <Field
                name="name"
                value={name}
                placeholder="Name of the property"
                className="form-control"></Field>
              <ErrorMessage name="name" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="type">Property Type</label>
              <Field
                as="select"
                name="type"
                value={type}
                className="form-control">
                {!propertyType && (
                  <option key="0" value="">
                    Select property type
                  </option>
                )}
                {propertyType &&
                  propertyType.map((property) => (
                    <option value={property.value} key={property.value}>
                      {property.value}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="type" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="listingPrice">Listing Price</label>
              <Field
                name="listingPrice"
                value={listingPrice}
                placeholder="$100.00"
                className="form-control"></Field>
              <ErrorMessage name="listingPrice" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="bedroom">Bedrooms</label>
              <Field
                name="bedroom"
                value={bedroom}
                placeholder="1"
                className="form-control"></Field>
              <ErrorMessage name="bedroom" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="bathroom">Bathrooms</label>
              <Field
                name="bathroom"
                value={bathroom}
                placeholder="1"
                className="form-control"></Field>
              <ErrorMessage name="bathroom" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <Field
                name="area"
                value={area}
                placeholder="100 m2"
                className="form-control"></Field>
              <ErrorMessage name="area" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="floor">Floor Number</label>
              <Field
                name="floor"
                value={floor}
                placeholder="1"
                className="form-control"></Field>
              <ErrorMessage name="floor" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="parkingAvailable">Parking Available</label>
              <Field type="checkbox" name="parkingAvailable" />
              {parkingAvailable}
              <ErrorMessage name="parkingAvailable" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="parkingSpot">Parking Spots</label>
              <Field
                name="parkingSpot"
                value={parkingSpot}
                placeholder="1"
                className="form-control"></Field>
              <ErrorMessage name="parkingSpot" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="isFeatured">Featured Property</label>
              <Field type="checkbox" name="isFeatured" />
              {isFeatured}
              <ErrorMessage name="isFeatured" component="div" />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label htmlFor="address">Featured Property</label>
              <Field
                as="select"
                name="address"
                value={address}
                placeholder="Select Address"
                className="form-control">
                {!addresses && (
                  <option key="0" value="">
                    Select Address
                  </option>
                )}
                {addresses &&
                  addresses.map((address) => (
                    <option value={address.id} key={address.id}>
                      {address.street}, {address.state}, {address.city},
                      {address.country}, {address.zip}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="address" component="div" />
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default PropertyAddForm;
