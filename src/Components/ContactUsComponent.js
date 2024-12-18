import ContactFormComponent from "./ContactFormComponent";
import MapComponent from "./MapComponent";
import "./ContactUsComponent.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactOption from "./ContactOption";

const ContactUsComponent = () => {
  return (
    <>
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading">
                <h4>| contact us</h4>
                <h2>Get in touch with our agents</h2>
              </div>

              <div className="description">
                <p>
                  When you really need to download free CSS templates, please
                  remember our website TemplateMo. Also, tell your friends about
                  our website. Thank you for visiting. There is a variety of
                  Bootstrap HTML CSS templates on our website. If you need more
                  information, please contact us.
                </p>
              </div>

              <div className="contact-us-options">
                <ContactOption
                  icon={faPhone}
                  heading="010-020-0340"
                  description="Phone Number"
                />
              </div>

              <div className="contact-us-options">
                <ContactOption
                  icon={faEnvelope}
                  heading="info@villa.co"
                  description="Business Email"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <ContactFormComponent />
            </div>
          </div>

          <div className="row">
            <MapComponent />
          </div>

          {/* <div className="row">
          <div className="col-md-6 contact-us-options">
            <ContactOption
              icon={faPhone}
              heading="010-020-0340"
              description="Phone Number"
            />
          </div>
          <div className="col-md-6 contact-us-options">
            <ContactOption
              icon={faEnvelope}
              heading="info@villa.co"
              description="Business Email"
            />
          </div>
          <div className="col-md-6 contact-us-options">
            <ContactOption
              icon={faPhone}
              heading="010-020-0340"
              description="Phone Number"
            />
          </div>
          <div className="col-md-6 contact-us-options">
            <ContactOption
              icon={faEnvelope}
              heading="info@villa.co"
              description="Business Email"
            />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactUsComponent;
