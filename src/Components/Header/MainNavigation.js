import { useState, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout, getCurrentUser } from "services/auth.service";

export const MainNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  useEffect(() => {
    getUserFromStorage();
  }, []);

  function getUserFromStorage() {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminDashboard(user.roles.includes("ROLE_ADMIN"));
    }
  }

  function logoutUser() {
    logout();
  }

  return (
    <Nav>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/properties">
        Properties
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Contact Us
      </Nav.Link>
      <NavDropdown title="Admin" id="collasible-nav-dropdown">
        {!showAdminDashboard && (
          <NavDropdown.Item as={Link} to="/admin/login">
            Login
          </NavDropdown.Item>
        )}
        {showAdminDashboard && (
          <div>
            <NavDropdown.Item as={Link} to="/admin/dashboard">
              Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/enquiries">
              Enquiries
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/addresses">
              Address
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
          </div>
        )}
      </NavDropdown>
    </Nav>
  );
};
