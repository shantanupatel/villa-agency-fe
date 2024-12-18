import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

import "./DealsComponent.scss";
import DealComponent from "./DealComponent";

const DealsComponent = () => {
  const dealData = [
    {
      id: 1,
      dealType: {
        label: "Apartment",
        link: "apartment",
      },
      propertyInfo: {
        flatSpace: "185 m2",
        floorNumber: "26th",
        rooms: 4,
        parkingAvailable: "Yes",
        paymentProcess: "Bank",
      },
      propertyDescription: {
        heading: "Extra Info About Property",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      },
    },
    {
      id: 2,
      dealType: {
        label: "Villa House",
        link: "villahouse",
      },
      propertyInfo: {
        flatSpace: "250 m2",
        floorNumber: "26th",
        rooms: 5,
        parkingAvailable: "Yes",
        paymentProcess: "Bank",
      },
      propertyDescription: {
        heading: "Detail Info About Villa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.<br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
      },
    },
    {
      id: 3,
      dealType: {
        label: "Penthouse",
        link: "penthouse",
      },
      propertyInfo: {
        flatSpace: "320 m2",
        floorNumber: "34th",
        rooms: 6,
        parkingAvailable: "Yes",
        paymentProcess: "Bank",
      },
      propertyDescription: {
        heading: "Extra Info About Penthouse",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.<br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
      },
    },
  ];

  /* const factsList = facts.map((fact) => (
    <div className="col-lg-4 fun-facts-item">
      <FunFactComponent
        key={fact.id}
        count={fact.count}
        summary={fact.summary}
      />
    </div>
  )); */

  return (
    <>
      <div className="deals">
        <div className="container">
          <div className="row deals-container">
            <div className="col-lg-4">
              <div className="heading">
                <h4>| Best Deal</h4>
                <h2>Find Your Best Deal Right Now</h2>
              </div>
            </div>
            <div className="col-lg-8"></div>
          </div>

          <div className="row">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={4}></Col>
                <Col sm={8}>
                  <Nav variant="pills" className="flex-column">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {dealData.map((deal) => (
                      <Nav.Item key={deal.id}>
                        <Nav.Link eventKey={deal.dealType.link}>
                          {deal.dealType.label}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Tab.Content>
                    {/* <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane> */}
                    {dealData.map((deal) => (
                      <Tab.Pane key={deal.id} eventKey={deal.dealType.link}>
                        {/* {deal.dealType.label} */}
                        <DealComponent key={deal.id} data={deal} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsComponent;
