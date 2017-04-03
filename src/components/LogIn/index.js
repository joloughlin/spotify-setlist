import React from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import TextField from 'components/Form/TextField';
import { required, minimumLength7 } from 'utilities/validations';

const LogIn = ({ handleSubmit, error }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field
        component={TextField}
        name="email"
        label="Email"
        placeholder="Email..."
        type="email"
        validate={[required]}
      />
      <Field
        component={TextField}
        name="password"
        label="Password"
        placeholder="Password..."
        type="password"
        validate={[required, minimumLength7]}
      />
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
);

LogIn.propTypes = {
  ...reduxFormPropTypes,
};

export default reduxForm({
  form: 'LogIn',
})(LogIn);
