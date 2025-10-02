import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "Components/UI/ButtonComponent";
// import { useNavigate } from "react-router-dom";
import { register } from "services/auth.service";
import ToastComponent from "Components/Toast/ToastComponent";
import { ToastConfig } from "constants/ToastConfig";

const initialValues = {
  username: "",
  email: "",
  password: "",
  // role: "",
};

const schema = Yup.object().shape({
  username: Yup.string()
    .min(1, "User name must be at least 1 character or more.")
    .max(20, "User name must have maximum of 20 characters")
    .required("User name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  // role: Yup.string().required("Role is required."),
});

const SignUpComponent = () => {
  // const history = useNavigate();
  const [bg, setBg] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState();
  const [toastBody, setToastBody] = useState();
  const [toastAutohide, setToastAutohide] = useState(false);

  const handleSubmit = async (values) => {
    const { username, email, password } = values;
    const payload = {
      username: username,
      email: email,
      role: ["admin"],
      password: password,
    };

    register(payload).then((response) => {
      const data = response.data;

      if (data.httpStatus === 400) {
        setShowToast(true);
        setBg(ToastConfig.info.bg);
        setToastHeader(ToastConfig.info.label);
        setToastBody(data.message);
        setToastAutohide(true);
      } else {
        setShowToast(true);
        setBg(ToastConfig.success.bg);
        setToastHeader(ToastConfig.success.label);
        setToastBody(data.message);
        setToastAutohide(true);
      }
    });
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <div className="section-heading">
        <Row>
          <Col>
            <h4>Login</h4>
          </Col>
        </Row>
      </div>

      <ToastComponent
        bg={bg}
        show={showToast}
        handleToastClose={handleToastClose}
        header={toastHeader}
        body={toastBody}
        autohide={toastAutohide}
      />

      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}>
            {({ isSubmitting, handleChange }) => (
              <Form>
                <div className="form-group">
                  <Row>
                    <Col md="4">
                      <label htmlFor="username">User Name</label>
                    </Col>
                    <Col md="8">
                      <Field
                        name="username"
                        placeholder="Full Name"
                        className="form-control"></Field>
                      <ErrorMessage name="username" component="div" />
                    </Col>
                  </Row>
                </div>

                <div className="form-group">
                  <Row>
                    <Col md="4">
                      <label htmlFor="email">Email</label>
                    </Col>
                    <Col md="8">
                      <Field
                        name="email"
                        placeholder="Email address"
                        className="form-control"></Field>
                      <ErrorMessage name="email" component="div" />
                    </Col>
                  </Row>
                </div>

                <div className="form-group">
                  <Row>
                    <Col md="4">
                      <label htmlFor="password">Password</label>
                    </Col>
                    <Col md="8">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"></Field>
                      <ErrorMessage name="password" component="div" />
                    </Col>
                  </Row>
                </div>

                {/* <div className="form-group">
                  <Row>
                    <Col md="4">
                      <label htmlFor="role">Role</label>
                    </Col>
                    <Col md="8">
                      <Field
                        as="select"
                        name="role"
                        className="form-control">
                        {!city && <option key="0">Select Role</option>}
                        {cities &&
                          cities.map((city) => (
                            <option value={city.isoCode} key={city.isoCode}>
                              {city.name}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage name="password" component="div" />
                    </Col>
                  </Row>
                </div> */}

                <div className="form-group text-center">
                  <ButtonComponent
                    variant="primary"
                    title="Submit"
                    type="submit"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default SignUpComponent;
