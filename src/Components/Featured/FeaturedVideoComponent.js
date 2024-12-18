import "./FeaturedVideoComponent.scss";
import videoBg from "../../Images/video-bg.jpg";
import videoFrame from "../../Images/video-frame.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const FeaturedVideoComponent = () => {
  return (
    <>
      <div className="fv-banner">
        <div
          className="fv-banner-img"
          style={{
            backgroundImage: "url(" + videoBg + ")",
          }}></div>

        <div className="container">
          <div className="heading offset-3 col-6 text-center">
            <h4>| Video View</h4>
            <h2>Get Closer View & Different Feeling</h2>
          </div>
        </div>
      </div>

      <div className="fv-content">
        <div className="fv-content-frame">
          <img src={videoFrame} alt="Video Frame" />
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="video-link">
            <FontAwesomeIcon icon={faPlay} className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default FeaturedVideoComponent;
