import InfoComponent from "./InfoComponent";
import SocialIconsComponent from "./SocialIconsComponent";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./HeaderComponent.scss";
import { Link } from "react-router-dom";

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
                  <Nav>
                    <Nav.Link as={Link} to="/">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/properties">
                      Properties
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/admin">
                      Admin
                    </Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/enquiries">
                      Enquiries
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                      Contact
                    </Nav.Link>
                    <Nav.Link href="#property">Admin</Nav.Link> */}
                    <NavDropdown title="Admin" id="collasible-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/admin/enquiries">
                        Enquiries
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/admin/addresses">
                        Address
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                  {/* <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav> */}
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
