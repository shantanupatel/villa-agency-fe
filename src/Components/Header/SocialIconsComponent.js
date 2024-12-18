import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialIconsComponent.scss";

const SocialIconsComponent = () => {
  return (
    <ul className="social-links">
      <li className="social-links-item">
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li className="social-links-item">
        <a href="https://x.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className="social-links-item">
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li className="social-links-item">
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </ul>
  );
};

export default SocialIconsComponent;
