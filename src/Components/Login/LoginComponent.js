import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "Components/UI/ButtonComponent";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const schema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Must be at least 1 character or more.")
    .required("Username is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const LoginComponent = (props) => {
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);

    history("/admin/dashboard");
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

      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
            }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <Row>
                    <Col md="4">
                      <label htmlFor="username">Email</label>
                    </Col>
                    <Col md="8">
                      <Field
                        name="username"
                        placeholder="Username"
                        className="form-control"></Field>
                      <ErrorMessage name="username" component="div" />
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

export default LoginComponent;
