import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HomeComponent from "./Components/Home/HomeComponent";
import ErrorPage from "./RouteNotFound";
import PropertiesComponent from "./Components/Properties/PropertiesComponent";
import AdminComponent from "./Components/Admin/AdminComponent";
import EnquiryListComponent from "./Components/Admin/EnquiryListComponent";
import AddressListComponent from "./Components/Admin/AddressListComponent";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomeComponent />,
      },
      {
        path: "properties",
        element: <PropertiesComponent />,
      },
      {
        path: "admin",
        element: <AdminComponent />,
        children: [
          {
            path: "enquiries",
            element: <EnquiryListComponent />,
          },
          {
            path: "addresses",
            element: <AddressListComponent />,
          },
        ],
      },
      {
        path: "enquiries",
        element: <EnquiryListComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
