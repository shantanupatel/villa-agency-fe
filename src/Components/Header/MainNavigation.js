import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout, getCurrentUser } from "services/auth.service";
import { localStorageRemoveItem } from "Utils";

export const MainNavigation = () => {
  const [, setCurrentUser] = useState(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const history = useNavigate();

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
    logout().then(response => {
      if (response && response.data) {
        localStorageRemoveItem('user');

        // reset current user details
        setCurrentUser([]);

        // auto-redirect the user to "/admin/login" route after delay of 10 seconds
        setTimeout(() => {
          history("/admin/login");
        }, 10000);
      }
    });
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
            <NavDropdown.Item as={Link} to="/admin/social-links">Social Links</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/social-platforms">
              Social Platforms
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
          </div>
        )}
      </NavDropdown>
    </Nav>
  );
};
