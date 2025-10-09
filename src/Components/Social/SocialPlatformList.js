import { useEffect, useState } from "react";
import { SocialPlatformsListColumnDefs } from "../../constants/ColumnDefs";
import GridComponent from "../Grid/GridComponent";
import ToastComponent from "../Toast/ToastComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { authHeader } from "services/auth-header";
import { ToastConfig } from "../../constants/ToastConfig";
import SocialPlatformAdd from "./SocialPlatformAdd";

const SocialPlatformList = (props) => {
  const [colDefs] = useState(SocialPlatformsListColumnDefs);
  const [open, setOpen] = useState(false);
  const [, setLoading] = useState(false);
  const [bg, setBg] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [toastAutohide, setToastAutohide] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchSocialPlatformsData();
  }, []);

  const handleToastClose = () => {
    setShowToast(false);
  };

  function fetchSocialPlatformsData() {
    axios.get(process.env.REACT_APP_API_URL + "/all/social-platforms").then((res) => {
      setRowData(res && res.data.data);
      setShowToast(true);
      setBg(ToastConfig.success.bg);
      setToastHeader(ToastConfig.success.label);
      setToastBody(res.data.message);
      setToastAutohide(true);
    }).catch((err) => {
      setShowToast(true);
      setBg(ToastConfig.failure.bg);
      setToastHeader(ToastConfig.failure.label);

      if (err.status === 401) {
        setToastBody("Invalid credentials. Kindly login again.");
      } else {
        setToastBody("Error fetching list of platforms");
      }

      setToastAutohide(false);
    })
  }

  function handleOpenModal() {
    setOpen(true);
  }

  function handleHideModal() {
    setOpen(false);
  }

  const doSubmit = (values) => {
    setLoading(true);
    addNewSocialPlatform(values);
    setOpen(false);
  };

  const addNewSocialPlatform = async (values) => {
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/admin/social-platforms",
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
        setShowToast(true);
        setBg(ToastConfig.success.bg);
        setToastHeader(ToastConfig.success.label);
        setToastBody(res.data.message);
        setToastAutohide(true);
        fetchSocialPlatformsData();
      })
      .catch((err) => {
        setShowToast(true);
        setBg(ToastConfig.failure.bg);
        setToastHeader(ToastConfig.failure.label);

        if (err.status === 401) {
          setToastBody("Invalid credentials. Kindly login again.");
        } else {
          setToastBody("Error saving new social media platform");
        }

        setToastAutohide(false);
      });
  };

  return (
    <>
      <div className="section-heading">
        <Row>
          <Col>
            <h4>Social Platforms</h4>
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

      {open && (
        <SocialPlatformAdd
          show={open}
          doSubmit={doSubmit}
          onCancel={handleHideModal}
        />
      )}

      <ToastComponent
        bg={bg}
        show={showToast}
        handleToastClose={handleToastClose}
        header={toastHeader}
        body={toastBody}
        autohide={toastAutohide}
      />

      <GridComponent rowData={rowData} colDefs={colDefs} />
    </>
  )
}

export default SocialPlatformList