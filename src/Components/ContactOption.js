import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactOption.scss";

const ContactOption = ({ icon, heading, description }) => {
  return (
    <div className="contact-us-options-item">
      <div className="col-2 col-md-2 text-center">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="col-10 col-md-10">
        <h4>{heading}</h4>
        {description}
      </div>
    </div>
  );
};

export default ContactOption;
