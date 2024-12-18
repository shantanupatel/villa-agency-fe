import { Outlet } from "react-router-dom";

const AdminComponent = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default AdminComponent;
