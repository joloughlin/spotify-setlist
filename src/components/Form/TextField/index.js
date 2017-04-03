import React from 'react';

const ErrorOrWarning = ({ error, touched, warning }) => {
  const message = error || warning;
  return !touched || !message ? null : <span>{message}</span>;
};

export default function TextField(
  { input, label, meta: { touched, error, warning }, placeholder, type },
) {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <div>
        <input {...input} id={label} placeholder={placeholder} type={type} />
        <ErrorOrWarning error={error} touched={touched} warning={warning} />
      </div>
    </div>
  );
}
