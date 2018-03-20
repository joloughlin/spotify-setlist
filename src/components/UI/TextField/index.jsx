import React from 'react';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import ErrorOrWarning from '../ErrorOrWarning';

export const TextField = ({
  input,
  label,
  meta: { error, touched, warning },
  placeholder,
  type,
}) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} id={label} placeholder={placeholder} type={type} />
      <ErrorOrWarning error={error} touched={touched} warning={warning} />
    </div>
  </div>
);

TextField.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextField;
