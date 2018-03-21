import React from 'react';
import { Field, formPropTypes } from 'redux-form';
import enhance from './enhance';
import TextField from 'components/UI/TextField';
import { required, minimumLength7 } from 'utils';

export const text = {
  button: 'Submit',
  emailLabel: 'Email',
  emailPlaceholder: 'Email...',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Password...',
};

export const LogIn = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={TextField}
      name="email"
      label={text.emailLabel}
      placeholder={text.emailPlaceholder}
      type="email"
      validate={[required]}
    />
    <Field
      component={TextField}
      name="password"
      label={text.passwordLabel}
      placeholder={text.passwordPlaceholder}
      type="password"
      validate={[required, minimumLength7]}
    />
    <button type="submit">{text.button}</button>
  </form>
);

LogIn.propTypes = {
  ...formPropTypes,
};

export default enhance(LogIn);
