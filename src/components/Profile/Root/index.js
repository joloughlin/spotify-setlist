import React from 'react';
import PropTypes from 'prop-types';
import enhance from './enhance';

export const text = {
  header: 'My Profile',
};

const Profile = ({ textEmail }) => (
  <div>
    <h1>{text.header}</h1>
    <h2>{textEmail}</h2>
  </div>
);

Profile.propTypes = {
  textEmail: PropTypes.string.isRequired,
};

export default enhance(Profile);
