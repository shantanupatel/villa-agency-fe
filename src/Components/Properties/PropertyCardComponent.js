import { Row, Col } from "react-bootstrap";
import ButtonComponent from "../UI/ButtonComponent";
import "./PropertyCardComponent.scss";

const PropertyCardComponent = (props) => {
  // function to handle formatting of listing price as currency
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div className="property">
      <div className="property-image">
        <img src={props.data.propertyImage} alt="" />
      </div>
      <div className="property-details">
        <span className="property-details-type">{props.data.type}</span>
        <span className="property-details-price text-right">
          {currencyFormat(props.data.listingPrice)}
        </span>
      </div>
      <div className="property-heading">
        {props.data.name}, {props.data.address.street} {props.data.address.city}
        , {props.data.address.state} {props.data.address.zip}
      </div>
      <div className="property-features">
        <Row>
          <Col sm={6}>
            Bedrooms: <strong>{props.data.bedroom}</strong>
          </Col>
          <Col sm={6}>
            Bathrooms: <strong>{props.data.bathroom}</strong>
          </Col>
        </Row>
        {/* <div>
          <span className="mr-4">
            Bedrooms: <strong>{props.data.bedroom}</strong>
          </span>
          <span className="mr-4">
            Bathrooms: <strong>{props.data.bathroom}</strong>
          </span>
        </div> */}
        <Row>
          <Col sm={6}>
            Area: <strong>{props.data.area}</strong>
          </Col>
          <Col sm={6}>
            Floor: <strong>{props.data.floor}</strong>
          </Col>
          <Col sm={6}>
            Parking: <strong>{props.data.parkingSpot}</strong>
          </Col>
        </Row>
        {/* <div>
          <span className="mr-4">
            Area: <strong>{props.data.area}</strong>
          </span>
          <span className="mr-4">
            Floor: <strong>{props.data.floor}</strong>
          </span>
          <span className="mr-4">
            Parking: <strong>{props.data.parkingSpot}</strong>
          </span>
        </div> */}
      </div>

      <div className="text-center">
        <ButtonComponent title="Schedule a visit" variant="secondary" />
      </div>
    </div>
  );
};

export default PropertyCardComponent;
