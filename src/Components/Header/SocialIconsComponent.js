import "./SocialIconsComponent.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SocialIconComponent from "./SocialIconComponent";

const SocialIconsComponent = () => {
  const [socialIcons, setSocialIcons] = useState([]);

  useEffect(() => {
    getListOfSocialIcons();
  }, [])

  const getListOfSocialIcons = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/all/social-links", null)
      .then((res) => {
        if (res && res.data) {
          setSocialIcons(res.data.data)
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="social-links">
        {socialIcons.map((platform) => (
          <span className="social-links-item" key={platform.id}>
            <SocialIconComponent platformName={platform.platformName} />
          </span>
        ))}
      </div>
    </>
  );
};

export default SocialIconsComponent;
