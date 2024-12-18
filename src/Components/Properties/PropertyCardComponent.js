import ButtonComponent from "../UI/ButtonComponent";
import "./PropertyCardComponent.scss";

const PropertyCardComponent = (props) => {
  return (
    <div className="property">
      <div className="property-image">
        <img src={props.data.propertyImage} alt="" />
      </div>
      <div className="property-details">
        <span className="property-details-type">{props.data.propertyType}</span>
        <span className="property-details-price text-right">
          {props.data.propertyPrice}
        </span>
      </div>
      <div className="property-heading">{props.data.propertyName}</div>
      <div className="property-features">
        <div>
          <span className="mr-4">
            Bedrooms: <strong>{props.data.propertyFeatures.bedrooms}</strong>
          </span>
          <span className="mr-4">
            Bathrooms: <strong>{props.data.propertyFeatures.bathrooms}</strong>
          </span>
        </div>
        <div>
          <span className="mr-4">
            Area: <strong>{props.data.propertyFeatures.area}</strong>
          </span>
          <span className="mr-4">
            Floor: <strong>{props.data.propertyFeatures.floor}</strong>
          </span>
          <span className="mr-4">
            Parking: <strong>{props.data.propertyFeatures.parking}</strong>
          </span>
        </div>
      </div>

      <div className="text-center">
        <ButtonComponent title="Schedule a visit" variant="secondary" />
      </div>
    </div>
  );
};

export default PropertyCardComponent;
