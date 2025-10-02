import InfoComponent from "./InfoComponent";
import SocialIconsComponent from "./SocialIconsComponent";
import { Navbar } from "react-bootstrap";

import "./HeaderComponent.scss";
import { MainNavigation } from "./MainNavigation";

const HeaderComponent = () => {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <InfoComponent />
            </div>

            <div className="col-md-4">
              <SocialIconsComponent />
            </div>
          </div>
          {/* <div className="sub-header-container">
          </div> */}
        </div>
      </div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                  <a href="home">
                    <h1>VILLA</h1>
                  </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <MainNavigation />
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
