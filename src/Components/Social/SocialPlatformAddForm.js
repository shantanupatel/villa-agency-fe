import { Field, useFormikContext, ErrorMessage, Form } from "formik";

const SocialPlatformAddForm = () => {
  const {
    values,
    handleSubmit,
  } = useFormikContext();

  const { platformName, baseUrl } = values;

  return (
    <div>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="street">Name</label>
          <Field
            name="platformName"
            value={platformName}
            placeholder="Name"
            className="form-control"></Field>
          <ErrorMessage name="platformName" component="div" className="form-error" />
        </div>
        
        <div className="form-group">
          <label htmlFor="street">Base URL</label>
          <Field
            name="baseUrl"
            value={baseUrl}
            placeholder="Base URL (e.g. https://www.facebook.com)"
            className="form-control"></Field>
          <ErrorMessage name="baseUrl" component="div" className="form-error" />
        </div>
      </form>
    </div>
  )
}

export default SocialPlatformAddForm