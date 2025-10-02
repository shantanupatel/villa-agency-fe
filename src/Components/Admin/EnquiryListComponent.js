import { useEffect, useState } from "react";
import GridComponent from "../Grid/GridComponent";
import ToastComponent from "../Toast/ToastComponent";
import { EnquiryListColumnDefs } from "../../constants/ColumnDefs";
import { ToastConfig } from "../../constants/ToastConfig";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { authHeader } from "services/auth-header";

const EnquiryListComponent = () => {
  // const [enquiries, setEnquiries] = useState([]);
  // let enquiries = [];
  // let rowData;
  const [showToast, setShowToast] = useState(false);
  const [bg, setBg] = useState("success");
  // const [toastDelay, setToastDelay] = useState(5000);
  const [toastAutohide, setToastAutohide] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState(EnquiryListColumnDefs);

  useEffect(() => {
    fetchEnquiriesData();
  }, []);

  const handleToastClose = () => {
    setShowToast(false);
  };

  function fetchEnquiriesData() {
    fetch(process.env.REACT_APP_API_URL + "/admin/enquiries", {
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.httpStatus === 401) {
          setBg(ToastConfig.failure.bg);
          setShowToast(true);
          setToastHeader(ToastConfig.failure.label);
          setToastBody("Invalid credentials");
          setToastAutohide(false);
        } else if (json.httpStatus === 200) {
          setRowData(json.data);
          setBg(ToastConfig.success.bg);
          setShowToast(true);
          setToastHeader(ToastConfig.success.label);
          setToastBody(json.message);
          setToastAutohide(true);
        }

        setShowToast(true);
      })
      .catch((err) => {
        // console.log(err.message)
        setShowToast(true);
        setBg(ToastConfig.failure.bg);
        setToastHeader(ToastConfig.failure.label);
        setToastBody("Error retrieving list of enquiries");
        setToastAutohide(false);
      });

    // console.log(rowData);
  }

  /* const generateRowData = () => {
    rowData = enquiries.map((enquiry) => {
      return (
        <tr>
          <td>{enquiry.fullname}</td>
          <td>{enquiry.email}</td>
          <td>{enquiry.subject}</td>
          <td>{enquiry.message}</td>
        </tr>
      );
    });

    console.log(rowData);
  }; */

  return (
    <>
      {/* <div className="container"> */}
      {/* <p>Enquiry Component</p> */}

      {/* <AgGridReact rowData={rowData} columnDefs={colDefs} /> */}

      <div className="section-heading">
        <Row>
          <Col>
            <h4>Enquiry</h4>
          </Col>
          <Col></Col>
        </Row>
      </div>

      <ToastComponent
        bg={bg}
        show={showToast}
        // delay={toastDelay}
        handleToastClose={handleToastClose}
        header={toastHeader}
        body={toastBody}
        autohide={toastAutohide}
      />

      <GridComponent rowData={rowData} colDefs={colDefs} />
      {/* </div> */}
    </>
  );
};

export default EnquiryListComponent;
