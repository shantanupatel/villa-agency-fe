import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "Components/UI/ButtonComponent";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  // role: "",
};

const schema = Yup.object().shape({
  fullname: Yup.string()
    .min(1, "Must be at least 1 character or more.")
    .required("Full name is required."),
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
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    history("/admin");
  };

  /* function handleCityChange(e) {
    setSelectedCity(selectedCity);

    handleChange(e);
  } */

  return (
    <>
      <div className="section-heading">
        <Row>
          <Col>
            <h4>Login</h4>
          </Col>
        </Row>
      </div>

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
                      <label htmlFor="fullname">Full Name</label>
                    </Col>
                    <Col md="8">
                      <Field
                        name="fullname"
                        placeholder="Full Name"
                        className="form-control"></Field>
                      <ErrorMessage name="fullname" component="div" />
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
