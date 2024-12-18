import { useEffect, useState } from "react";
import GridComponent from "../Grid/GridComponent";
import ToastComponent from "../Toast/ToastComponent";

const EnquiryListComponent = () => {
  // const [enquiries, setEnquiries] = useState([]);
  // let enquiries = [];
  // let rowData;
  const [showToast, setShowToast] = useState(false);
  // const [toastDelay, setToastDelay] = useState(5000);
  const [toastAutohide, settoastAutohide] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState([
    /* {
      field: "",
      checkboxSelection: true,
      editable: true,
      width: 50,
    }, */
    /* {
      field: "actions",
      headerName: "",
      cellRenderer: GridActions,
      width: 50,
    }, */
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullname",
      headerName: "Name",
      editable: true,
      // flex: 2,
    },
    {
      field: "email",
      headerName: "Email Address",
      // type: "number",
      editable: true,
      // flex: 1,
    },
    {
      field: "subject",
      headerName: "Subject",
      editable: true,
      // flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      // flex: 1,
    },
    {
      field: "source",
      headerName: "Source",
      // flex: 1,
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      // flex: 1,
    },
  ]);

  useEffect(() => {
    fetchEnquiriesData();
  }, []);

  const handleToastClose = () => {
    setShowToast(false);
  };

  function fetchEnquiriesData() {
    fetch(process.env.REACT_APP_API_URL + "/enquiries")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRowData(json.data);
        setShowToast(true);
        setToastHeader("test header");
        setToastBody(json.message);
        settoastAutohide(true);
      })
      .catch((err) => console.log(err.message));

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

      <ToastComponent
        // bg={bg}
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
