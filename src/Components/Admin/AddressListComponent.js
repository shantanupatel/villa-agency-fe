import { useEffect, useState } from "react";
import GridComponent from "../Grid/GridComponent";
import AddressAddComponent from "./AddressAddComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ToastComponent from "../Toast/ToastComponent";
import { ToastConfig } from "../../constants/ToastConfig";
import { authHeader } from "services/auth-header";
import axios from "axios";
import { AddressListActions } from "Components/Admin/AddressListActions";
import { AddressEditComponent } from "./AddressEditComponent";
import { AddressDeleteComponent } from "./AddressDeleteComponent";

const AddressListComponent = () => {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
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

  // toaster notification for edit address
  const [toastEditBg, setToastEditBg] = useState();
  const [showEditToast, setShowEditToast] = useState(false);
  const [toastEditAutohide, setToastEditAutohide] = useState(false);
  const [toastEditHeader, setToastEditHeader] = useState();
  const [toastEditBody, setToastEditBody] = useState();

  // toaster notification for delete address
  // const [toastDeleteBg, setToastDeleteBg] = useState();
  // const [showDeleteToast, setShowDeleteToast] = useState(false);
  // const [toastDeleteAutohide, setToastDeleteAutohide] = useState(false);
  // const [toastDeleteHeader, setToastDeleteHeader] = useState();
  // const [toastDeleteBody, setToastDeleteBody] = useState();

  // const [colDefs] = useState(AddressListColumnDefs);
  const [colDefs, setColDefs] = useState([
    {
      field: "",
      width: 50,
      checkboxSelection: true,
    },
    {
      field: "",
      cellRenderer: AddressListActions,
      cellRendererParams: {
        clicked: handleAddressAction,
      },
      width: 100,
    },
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "street",
      headerName: "Street",
      editable: true,
      // minWidth: 100,
      filter: true,
    },
    {
      field: "city",
      headerName: "City",
      /* type: "number", */
      editable: true,
      filter: true,
    },
    {
      field: "state",
      headerName: "State",
      editable: true,
      maxWidth: 100,
      filter: true,
    },
    {
      field: "zip",
      headerName: "Zip",
      width: 100,
      filter: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
      filter: true,
      resizable: true,
    },
    {
      field: "createdDate",
      headerName: "Created Date",
    },
  ]);
  const [initialFormData, setInitialFormData] = useState({});

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

  // function for handling save for Edit modal
  const handleEditModalSubmit = (values) => {
    setLoading(true);
    editExistingAddress(values);
    setOpenEditModal(false);
  };

  // function for showing address edit modal
  function handleShowEditModal() {
    setOpenEditModal(true);
  }

  // function for hiding address edit modal
  function handleHideEditModal() {
    setOpenEditModal(false);
  }

  // function for handling delete for Delete modal
  /* const handleDeleteModalSubmit = (values) => {
    setLoading(true);
    deleteExistingAddress(values);
    setOpenDeleteModal(false);
  }; */

  // function for showing address delete modal
  /* function handleShowDeleteModal() {
    setOpenDeleteModal(true);
  } */

  // function for hiding address delete modal
  /* function handleHideDeleteModal() {
    setOpenDeleteModal(false);
  } */

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleAddToastClose = () => {
    setShowAddToast(false);
  };

  const handleEditToastClose = () => {
    setShowEditToast(false);
  };

  /* const handleDeleteToastClose = () => {
    setShowDeleteToast(false);
  }; */

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

  // function for handling edit address
  const editExistingAddress = async (values) => {
    axios
      .put(
        process.env.REACT_APP_API_URL + "/addresses/" + values?.id,
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
        setShowEditToast(true);
        setToastEditBg(ToastConfig.success.bg);
        setToastEditHeader(ToastConfig.success.label);
        setToastEditBody(res.data.message);
        setToastEditAutohide(true);
        setLoading(false);
        fetchAddressData();
      })
      .catch((err) => {
        setShowEditToast(true);
        setToastEditBg(ToastConfig.failure.bg);
        setToastEditHeader(ToastConfig.failure.label);

        if (err.status === 401) {
          setToastEditBody("Invalid credentials. Kindly login again.");
        } else {
          setToastEditBody("Error saving new address");
        }
        setLoading(false);
        setToastEditAutohide(false);
      });
  };

  // function for handling delete address
  /* const deleteExistingAddress = async (values) => {
    axios
      .delete(process.env.REACT_APP_API_URL + "/addresses/" + values?.id, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        setShowDeleteToast(true);
        setToastDeleteBg(ToastConfig.success.bg);
        setToastDeleteHeader(ToastConfig.success.label);
        setToastDeleteBody(res.data.message);
        setToastDeleteAutohide(true);
        setLoading(false);
        fetchAddressData();
      })
      .catch((err) => {
        setShowDeleteToast(true);
        setToastDeleteBg(ToastConfig.failure.bg);
        setToastDeleteHeader(ToastConfig.failure.label);

        if (err.status === 401) {
          setToastDeleteBody("Invalid credentials. Kindly login again.");
        } else {
          setToastDeleteBody("Error deleting address");
        }
        setLoading(false);
        setToastDeleteAutohide(false);
      });
  }; */

  function handleAddressAction(val) {
    if (val?.event === "edit") {
      setInitialFormData(val);
      handleShowEditModal();
      /* } else if (val?.event === "delete") {
      setInitialFormData(val);
      handleShowDeleteModal(); */
    }
  }

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

        {/* toaster notification for edit address */}
        <ToastComponent
          bg={bg}
          show={showEditToast}
          handleToastClose={handleEditToastClose}
          header={toastEditHeader}
          body={toastEditBody}
          autohide={toastEditAutohide}
        />

        {/* toaster notification for delete address */}
        {/* <ToastComponent
          bg={bg}
          show={showDeleteToast}
          handleToastClose={handleDeleteToastClose}
          header={toastDeleteHeader}
          body={toastDeleteBody}
          autohide={toastDeleteAutohide}
        /> */}

        {/* {open && (
          <ModalComponent
            size={dialogWidth}
            show={open}
            loading={loading}
            modalTitle="Add Address"
            modalBody={<AddressAddComponent doSubmit={doSubmit} />}
            onCancel={handleHideModal}
            formType="add"
          />
        )} */}

        {open && (
          <AddressAddComponent
            show={open}
            doSubmit={doSubmit}
            onCancel={handleHideModal}
          />
        )}

        {openEditModal && (
          <AddressEditComponent
            show={openEditModal}
            initialData={initialFormData}
            doSubmit={handleEditModalSubmit}
            closeModal={handleHideEditModal}
          />
        )}

        {/* {openDeleteModal && (
          <AddressDeleteComponent
            show={openDeleteModal}
            initialData={initialFormData}
            doSubmit={handleDeleteModalSubmit}
            closeModal={handleHideDeleteModal}
            message="Are you sure you want to delete this record?"
          />
        )} */}

        <GridComponent rowData={rowData} colDefs={colDefs} />
      </div>
    </>
  );
};

export default AddressListComponent;
