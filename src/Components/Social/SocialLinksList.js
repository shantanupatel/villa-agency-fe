import { useState, useEffect } from "react";
import GridComponent from "../Grid/GridComponent";
import ToastComponent from "../Toast/ToastComponent";
import { ToastConfig } from "../../constants/ToastConfig";
import { SocialIconsListColumnDefs } from "../../constants/ColumnDefs";
import { authHeader } from "services/auth-header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SocialLinksAdd from "Components/Social/SocialLinksAdd";
import axios from "axios";

const SocialLinksList = () => {
  const [open, setOpen] = useState(false);
  const [, setLoading] = useState(false);
  const [bg, setBg] = useState("success");
  const [showToast, setShowToast] = useState(false);
  // const [toastDelay, setToastDelay] = useState(5000);
  const [toastAutohide, setToastAutohide] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [, setToastAddBg] = useState();
  const [, setShowAddToast] = useState(false);
  const [, setToastAddAutohide] = useState(false);
  const [, setToastAddHeader] = useState();
  const [, setToastAddBody] = useState();
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState(SocialIconsListColumnDefs);
  const [platformData, setPlatformData] = useState([]);

  useEffect(() => {
    fetchSocialLinksData();
    fetchSocialPlatformsData();
  }, []);

  const handleToastClose = () => {
    setShowToast(false);
  };

  function fetchSocialLinksData() {
    fetch(process.env.REACT_APP_API_URL + "/all/social-links", {
      headers: {
        Authorization: authHeader(),
      },
    })
      .then((res) => res.json())
      .then((json) => {
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
        setShowToast(true);
        setBg(ToastConfig.failure.bg);
        setToastHeader(ToastConfig.failure.label);
        setToastBody("Error retrieving list of enquiries");
        setToastAutohide(false);
      });
  }

  const fetchSocialPlatformsData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/all/social-platforms');

      setPlatformData(response.data.data);

    } catch (error) {
      setShowToast(true);
      setBg(ToastConfig.failure.bg);
      setToastHeader(ToastConfig.failure.label);
      setToastBody("Error retrieving list of social media platforms");
      setToastAutohide(false);
    }
  }

  function handleOpenModal() {
    setOpen(true);
  }

  function handleHideModal() {
    setOpen(false);
  }

  const doSubmit = (values) => {
    setLoading(true);
    addNewSocialLink(values);
    setOpen(false);
  };

  const addNewSocialLink = async (values) => {
    const filteredValue = platformData.filter(platform => platform.platformName === values.platformName);
    let payload = {};

    if (filteredValue) {
      payload = {
        profileUrl: values && filteredValue[0].baseUrl + values.profileUrl,
        displayName: values && values.displayName,
        socialPlatform: {
          id: filteredValue[0].id
        }
      };

    }

    await axios
      .post(
        process.env.REACT_APP_API_URL + "/admin/social-links",
        // JSON.stringify(values),
        payload,
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
        fetchSocialLinksData();
      })
      .catch((err) => {
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
              <h4>Social Links</h4>
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
          <SocialLinksAdd
            show={open}
            platformsData = {platformData}
            doSubmit={doSubmit}
            onCancel={handleHideModal}
          />
        )}

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

      </div>
    </>
  )
}

export default SocialLinksList;