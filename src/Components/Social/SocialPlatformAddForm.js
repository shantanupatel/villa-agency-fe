import { Field, useFormikContext, ErrorMessage } from "formik";

const SocialPlatformAddForm = () => {
  const {
    values,
    handleSubmit,
  } = useFormikContext();

  const { name } = values;

  return (
    <div>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="street">Name</label>
          <Field
            name="name"
            value={name}
            placeholder="Name"
            className="form-control"></Field>
          <ErrorMessage name="link" component="div" />
        </div>
      </form>
    </div>
  )
}

export default SocialPlatformAddForm