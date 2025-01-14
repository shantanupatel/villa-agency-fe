import { Field, useFormikContext } from "formik";

export const AddressDeleteForm = () => {
  const { values, handleSubmit } = useFormikContext();

  // current values from Formik
  const { id } = values;

  return (
    <>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="id">ID</label> */}
          <Field
            name="id"
            value={id}
            className="form-control"
            type="hidden"></Field>
        </div>

        <p>Are you sure you want to delete this record?</p>
      </form>
    </>
  );
};
