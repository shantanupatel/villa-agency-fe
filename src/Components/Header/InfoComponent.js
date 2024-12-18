import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import "./InfoComponent.scss";

const InfoComponent = () => {
  return (
    <ul className="info">
      <li className="info-link">
        <FontAwesomeIcon icon={faEnvelope} />
        info@company.com
      </li>
      <li className="info-link">
        <FontAwesomeIcon icon={faMap} />
        Sunny Isles Beach, FL 33160
      </li>
    </ul>
  );
};

export default InfoComponent;
