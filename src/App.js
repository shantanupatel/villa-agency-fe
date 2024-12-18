import "./App.scss";
import HeaderComponent from "./Components/Header/HeaderComponent";
import { Outlet } from "react-router-dom";

import FooterComponent from "./Components/FooterComponent";
/* import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import PropertiesComponent from "./Components/Properties/PropertiesComponent";
import EnquiryListComponent from "./Components/Admin/EnquiryListComponent";
import AddressListComponent from "./Components/Admin/EnquiryListComponent";
import AdminComponent from "./Components/Admin/AdminComponent";
import ContactUsComponent from "./Components/ContactUsComponent"; */

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      {/* <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="properties" element={<PropertiesComponent />} />
        <Route path="admin" element={<AdminComponent />}>
          <Route index element={EnquiryListComponent} />
          <Route path="addresses" element={AddressListComponent} />
        </Route>
        <Route path="enquiries" element={EnquiryListComponent} />
        <Route path="contact" element={ContactUsComponent} />
      </Routes> */}

      <Outlet />

      <FooterComponent />
    </div>
  );
}

export default App;
