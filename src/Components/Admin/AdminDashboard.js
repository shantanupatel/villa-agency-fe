import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "services/auth.service";
import { getCurrentUser } from "services/auth.service";
import { ToastConfig } from "constants/ToastConfig";
import ToastComponent from "Components/Toast/ToastComponent";
import { localStorageRemoveItem } from "Utils";

const AdminDashboard = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  const [bg, setBg] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [toastAutohide, setToastAutohide] = useState(false);
  const [userMessage, setUserMessage] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = () => {
    setCurrentUser(getCurrentUser());
    setUserMessage("Login successful.")
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove authentication token)
    // After logout, redirect to the login page
    logout().then((response) => {
      if (response && response.data) {
        const data = response.data;

        if (data.httpStatus === 400) {
          setShowToast(true);
          setBg(ToastConfig.info.bg);
          setToastHeader(ToastConfig.info.label);
          setToastBody(data.message);
          setToastAutohide(true);
        } else {
          setShowToast(true);
          setBg(ToastConfig.success.bg);
          setToastHeader(ToastConfig.success.label);
          setToastBody(data.message);
          setToastAutohide(true);
          setUserMessage("Logout successful.");
          setIsUserLoggedIn(false);
  
          localStorageRemoveItem("user");
          
          // reset current user details
          setCurrentUser([]);
          
          // auto-redirect the user to "/admin/login" route after delay of 10 seconds
          setTimeout(() => {
            history("/admin/login");
          }, 10000)
        }
      }
    });
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <ToastComponent
        bg={bg}
        show={showToast}
        handleToastClose={handleToastClose}
        header={toastHeader}
        body={toastBody}
        autohide={toastAutohide}
      />

      {currentUser && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div
            className="border rounded-lg p-4"
            style={{ width: "500px", minHeight: "400px" }}>
            <h2 className="mb-4 text-center">Welcome to Dashboard</h2>
            {/* <p className="mb-4 text-center">Hello, {username}!</p> */}
            <p className="text-center">{userMessage}</p>

            {currentUser ? (
              <div>
                <p>{currentUser.accessToken}</p>
                <p>{currentUser.id}</p>
                <p>{currentUser.username}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.roles}</p>
                <p>{currentUser.tokenType}</p>
              </div>
            ) : (
              ""
            )}

            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleLogout}>
                {isUserLoggedIn ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
