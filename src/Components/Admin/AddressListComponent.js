import { useEffect, useState } from "react";
import GridComponent from "../Grid/GridComponent";
import AddressAddComponent from "./AddressAddComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import ModalComponent from "../Modal/ModalComponent";
import ToastComponent from "../Toast/ToastComponent";
import { AddressListColumnDefs } from "../../constants/ColumnDefs";
import * as DIALOGSIZES from "../../constants/DialogSize";
import { ToastConfig } from "../../constants/ToastConfig";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
//   RegionSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

const dialogWidth = DIALOGSIZES.EXTRALARGE;

const AddressListComponent = () => {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState("success");
  const [showToast, setShowToast] = useState(false);
  // const [toastDelay, setToastDelay] = useState(5000);
  const [toastAutohide, setToastAutohide] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [toastAddBg, setToastAddBg] = useState();
  const [showAddToast, setShowAddToast] = useState(false);
  const [toastAddAutohide, setToastAddAutohide] = useState(false);
  const [toastAddHeader, setToastAddHeader] = useState();
  const [toastAddBody, setToastAddBody] = useState();
  // const toastConfig = {
  //   show: true,
  //   delay: 3000,
  //   autohide: true,
  //   header: "test header",
  //   body: "",
  // };
  // const [modalData, setModalData] = useState();
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState(AddressListColumnDefs);

  // const [region, setRegion] = useState("");
  // const [countryid, setCountryid] = useState(0);
  // const [stateid, setstateid] = useState(0);

  /* const initialValues = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    source: "Web",
  }; */

  /* const schema = Yup.object().shape({
    fullname: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    subject: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    message: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
    source: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
  }); */

  /* const handleSubmit = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
      // body: values,
    };
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/enquiries",
        requestOptions
      );

      console.log("values: ", values);

      if (response.ok) {
        console.log("Form submitted", values);
      } else {
        console.error("An error occurred when submitting the form");
      }
    } catch (error) {
      console.error("An error occurred when submitting the form", error);
    }
  }; */

  useEffect(() => {
    fetchAddressData();
  }, []);

  function fetchAddressData() {
    fetch(process.env.REACT_APP_API_URL + "/addresses")
      .then((res) => res.json())
      .then((json) => {
        setRowData(json.data);
        setShowToast(true);
        setBg(ToastConfig.success.bg);
        setToastHeader(ToastConfig.success.label);
        setToastBody(json.message);
        setToastAutohide(true);
      })
      .catch((err) => {
        setShowToast(true);
        setBg(ToastConfig.failure.bg);
        setToastHeader(ToastConfig.failure.label);
        setToastBody("Error retrieving list of addresses");
        setToastAutohide(false);
      });
  }

  function handleOpenModal() {
    setOpen(true);
  }

  function handleHideModal() {
    setOpen(false);
  }

  const doSubmit = (values) => {
    setLoading(true);
    addNewAddress(values);
    setOpen(false);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleAddToastClose = () => {
    setShowAddToast(false);
  };

  const addNewAddress = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(values),
    };
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/addresses",
        requestOptions
      );

      /* console.log(response);
      console.log(response.message);

      if (response.ok) {
        // console.log("Form submitted", values);
        setOpen(false);
      } else {
        console.error("An error occurred when submitting the form");
      } */

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      // console.log(json);
      // console.log(json.message);
      setLoading(false);
      setShowAddToast(true);
      setToastAddBg(ToastConfig.success.bg);
      setToastAddHeader(ToastConfig.success.label);
      setToastAddBody(json.message);
      setToastAddAutohide(true);
      fetchAddressData();
    } catch (error) {
      // console.error("An error occurred when submitting the form", error);
      setShowAddToast(true);
      setToastAddBg(ToastConfig.failure.bg);
      setToastAddHeader(ToastConfig.failure.label);
      setToastAddBody("Error saving new address");
      setToastAddAutohide(false);
    }
  };

  return (
    <>
      <div>
        <div className="section-heading">
          <Row>
            <Col>
              <h4>Address</h4>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="float-right"
                onClick={handleOpenModal}>
                +
              </Button>
            </Col>
          </Row>
        </div>

        <ToastComponent
          // bg={bg}
          show={showAddToast}
          // delay={toastDelay}
          handleToastClose={handleAddToastClose}
          header={toastAddHeader}
          body={toastAddBody}
          autohide={toastAddAutohide}
        />

        <ToastComponent
          // bg={ToastConfig.success.bg}
          bg={bg}
          show={showToast}
          // delay={toastDelay}
          handleToastClose={handleToastClose}
          header={toastHeader}
          body={toastBody}
          autohide={toastAutohide}
        />

        {open && (
          <ModalComponent
            size={dialogWidth}
            show={open}
            loading={loading}
            modalTitle="Add Address"
            modalBody={<AddressAddComponent doSubmit={doSubmit} />}
            onCancel={handleHideModal}
          />
        )}

        <GridComponent rowData={rowData} colDefs={colDefs} />
      </div>
    </>
  );
};

export default AddressListComponent;
