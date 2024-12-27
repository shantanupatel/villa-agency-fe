import { useEffect, useState } from "react";
import GridComponent from "../Grid/GridComponent";
import AddressAddComponent from "./AddressAddComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalComponent from "../Modal/ModalComponent";
import ToastComponent from "../Toast/ToastComponent";
import { AddressListColumnDefs } from "../../constants/ColumnDefs";
import * as DIALOGSIZES from "../../constants/DialogSize";
import { ToastConfig } from "../../constants/ToastConfig";
import { authHeader } from "services/auth-header";
import axios from "axios";

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
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState(AddressListColumnDefs);

  useEffect(() => {
    fetchAddressData();
  }, []);

  function fetchAddressData() {
    axios
      .get(process.env.REACT_APP_API_URL + "/addresses", {
        // headers: authHeader(),
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((response) => {
        setRowData(response.data.data);
        setShowToast(true);
        setBg(ToastConfig.success.bg);
        setToastHeader(ToastConfig.success.label);
        setToastBody(response.data.message);
        setToastAutohide(true);
      })
      .catch((err) => {
        setShowToast(true);
        setBg(ToastConfig.failure.bg);
        setToastHeader(ToastConfig.failure.label);

        if (err.status === 401) {
          setToastBody("Invalid credentials. Kindly login again.");
        } else {
          setToastBody("Error retrieving list of addresses");
        }

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
    axios
      .post(
        process.env.REACT_APP_API_URL + "/addresses",
        JSON.stringify(values),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: authHeader(),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setShowAddToast(true);
        setToastAddBg(ToastConfig.success.bg);
        setToastAddHeader(ToastConfig.success.label);
        setToastAddBody(res.data.message);
        setToastAddAutohide(true);
        fetchAddressData();
      })
      .catch((err) => {
        console.log(err);
        setShowAddToast(true);
        setToastAddBg(ToastConfig.failure.bg);
        setToastAddHeader(ToastConfig.failure.label);
        // setToastAddBody("Error saving new address");
        if (err.status === 401) {
          setToastAddBody("Invalid credentials. Kindly login again.");
        } else {
          setToastAddBody("Error saving new address");
        }
        setToastAddAutohide(false);
      });
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
