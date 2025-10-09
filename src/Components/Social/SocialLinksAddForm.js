import { useEffect, useState } from "react";
import { Field, useFormikContext, ErrorMessage } from "formik";

const SocialLinksAddForm = (props) => {
  const [, setPlatforms] = useState([]);

  const {
    values,
    handleSubmit,
  } = useFormikContext();

  // current values from Formik
  const { platformName, profileUrl, displayName } = values;

  useEffect(() => {
    setPlatforms(props.platforms);
  }, [props, props.platforms]);

  return (
    <div>
      <form id="foo" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="platformName">Name</label>
          <Field
            as="select"
            name="platformName"
            value={platformName}
            placeholder="Select Name"
            className="form-control">
            {props.platforms &&
              props.platforms.map((platform) => (
                <option value={platform.platformName} key={platform.platformName}>
                  {platform.platformName}
                </option>
              ))}
          </Field>
          <ErrorMessage name="platformName" component="div" className="form-error" />
        </div>

        <div className="form-group">
          <label htmlFor="profileUrl">Profile URL</label>
          <Field
            name="profileUrl"
            value={profileUrl}
            placeholder=""
            className="form-control"></Field>
          <ErrorMessage name="profileUrl" component="div" className="form-error" />
        </div>
        
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <Field
            name="displayName"
            value={displayName}
            placeholder=""
            className="form-control"></Field>
          <ErrorMessage name="displayName" component="div" className="form-error" />
        </div>
      </form>
    </div>
  );
}

export default SocialLinksAddForm;