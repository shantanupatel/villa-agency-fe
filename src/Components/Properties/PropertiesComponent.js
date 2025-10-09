import { useEffect, useState } from "react";
import "./PropertiesComponent.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropertyCardComponent from "./PropertyCardComponent";
import Button from "react-bootstrap/Button";
import ModalComponent from "../Modal/ModalComponent";
import ToastComponent from "../Toast/ToastComponent";
import * as DIALOGSIZES from "constants/DialogSize";
import PropertyAddComponent from "./PropertyAddComponent";
import axios from "axios";
import { authHeader } from "services/auth-header";
import { getCurrentUser } from "services/auth.service";
import { ToastConfig } from "constants/ToastConfig";

const PropertiesComponent = () => {
  const dialogWidth = DIALOGSIZES.EXTRALARGE;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [properties, setProperties] = useState(null);
  const [toastAddBg, setToastAddBg] = useState();
  const [showAddToast, setShowAddToast] = useState(false);
  const [toastAddAutohide, setToastAddAutohide] = useState(false);
  const [toastAddHeader, setToastAddHeader] = useState();
  const [toastAddBody, setToastAddBody] = useState();

  useEffect(() => {
    getUserInformation();
    getListOfProperties();
  }, []);

  // handler function that will be triggered once the form is submitted
  const doSubmit = (values) => {
    console.log(values);
    addNewProperty(values);
    setOpen(false);
  };

  // function handling form submission
  const addNewProperty = async (values) => {
    const {
      address,
      area,
      bathroom,
      bedroom,
      floor,
      isFeatured,
      listingPrice,
      name,
      parkingAvailable,
      parkingSpot,
      type,
    } = values;
    const payload = {
      address: {
        id: address,
      },
      area: area,
      bathroom: bathroom,
      bedroom,
      floor,
      isFeatured,
      listingPrice,
      name,
      parkingAvailable,
      parkingSpot,
      type,
    };

    axios
      .post(
        process.env.REACT_APP_API_URL + "/properties",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: authHeader(),
          },
        }
      )
      .then((res) => {
        setShowAddToast(true);
        setToastAddBg(ToastConfig.success.bg);
        setToastAddHeader(ToastConfig.success.label);
        setToastAddBody(res.data.message);
        setToastAddAutohide(true);
        getListOfProperties();
      })
      .catch((err) => {
        setShowAddToast(true);
        setToastAddBg(ToastConfig.failure.bg);
        setToastAddHeader(ToastConfig.failure.label);

        if (err.status === 401) {
          setToastAddBody("Invalid credentials. Kindly login again.");
        } else {
          setToastAddBody("Error saving new property");
        }
        setToastAddAutohide(false);
      });
  };

  const getUserInformation = () => {
    setCurrentUser(getCurrentUser());
  };

  const getListOfProperties = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/all/properties", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => setProperties(res.data.data))
      .catch((err) => console.log(err));
  };

  function handleOpenModal() {
    setOpen(true);
  }

  function handleHideModal() {
    setOpen(false);
  }

  const handleAddToastClose = () => {
    setShowAddToast(false);
  };

  return (
    <>
      <div className="properties">
        <div className="container">
          <div className="heading offset-2 offset-lg-4 col-8 col-lg-4 text-center">
            <h4>| Properties</h4>
            <h2>We Provide The Best Property You Like</h2>
          </div>

          {currentUser && (
            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="float-right"
                  onClick={handleOpenModal}>
                  +
                </Button>
              </Col>
            </Row>
          )}

          <ToastComponent
            bg={toastAddBg}
            show={showAddToast}
            handleToastClose={handleAddToastClose}
            header={toastAddHeader}
            body={toastAddBody}
            autohide={toastAddAutohide}
          />

            {properties ? (
              properties.map((property) => (
                <div className="row">
                  <div className="col-md-6 col-lg-4" key={property.id}>
                    <PropertyCardComponent key={property.id} data={property} />
                  </div>
                </div>
              ))
            ) : (
              <p>No properties found.</p>
            )}

          {open && (
            <ModalComponent
              size={dialogWidth}
              show={open}
              loading={loading}
              modalTitle="Add Address"
              modalBody={<PropertyAddComponent doSubmit={doSubmit} />}
              onCancel={handleHideModal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PropertiesComponent;
