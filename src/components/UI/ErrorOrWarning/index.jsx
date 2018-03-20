import React from 'react';
import PropTypes from 'prop-types';
import enhance from './enhance';

export const ErrorOrWarning = ({ message }) => <span>{message}</span>;

ErrorOrWarning.propTypes = {
  message: PropTypes.string.isRequired,
};

export default enhance(ErrorOrWarning);
