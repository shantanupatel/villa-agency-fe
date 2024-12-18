import featuredImage from "../../Images/featured.jpg";
import featuredIcon from "../../Images/featured-icon.png";
import infoIcon1 from "../../Images/info-icon-01.png";
import infoIcon2 from "../../Images/info-icon-02.png";
import infoIcon3 from "../../Images/info-icon-03.png";
import infoIcon4 from "../../Images/info-icon-04.png";
import "./FeaturedComponent.scss";
import Accordion from "react-bootstrap/Accordion";

const FeaturedComponent = () => {
  return (
    <div className="container">
      <div className="row featured-container">
        <div className="col-lg-4 featured-section">
          <div className="featured-image">
            <img src={featuredImage} alt="Featured" />
            <a href="featured" className="featured-icon">
              <img
                src={featuredIcon}
                className="featured-icon-image"
                alt="Featured Icon"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-5 featured-section">
          <div className="heading">
            <h4>| Featured</h4>
            <h2>Best Appartment &amp; Sea view</h2>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Best useful links ?</Accordion.Header>
              <Accordion.Body>
                Get <strong>the best villa</strong> website template in HTML CSS
                and Bootstrap for your business. TemplateMo provides you the{" "}
                <a
                  href="https://www.google.com/search?q=best+free+css+templates"
                  target="_blank"
                  rel="noreferrer">
                  best free CSS templates
                </a>{" "}
                in the world. Please tell your friends about it.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How does this work ?</Accordion.Header>
              <Accordion.Body>
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur <code>adipiscing</code> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Why is Villa Agency the best ?
              </Accordion.Header>
              <Accordion.Body>
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur <code>adipiscing</code> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-3 featured-section">
          <div className="featured-info">
            <div className="row featured-info-item">
              <div className="col-3 col-md-4">
                <img src={infoIcon1} alt="Info Icon" />
              </div>
              <div className="col-9 col-md-8">
                <h4>250 m2</h4>
                Total Flat Space
              </div>
            </div>
            <div className="row featured-info-item">
              <div className="col-3 col-md-4">
                <img src={infoIcon2} alt="Info Icon" />
              </div>
              <div className="col-9 col-md-8">
                <h4>Contract</h4>
                Contract Ready
              </div>
            </div>
            <div className="row featured-info-item">
              <div className="col-3 col-md-4">
                <img src={infoIcon3} alt="Info Icon" />
              </div>
              <div className="col-9 col-md-8">
                <h4>Payment</h4>
                Payment Process
              </div>
            </div>
            <div className="row featured-info-item">
              <div className="col-3 col-md-4">
                <img src={infoIcon4} alt="Info Icon" />
              </div>
              <div className="col-9 col-md-8">
                <h4>Safety</h4>
                24/7 Under Control
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
