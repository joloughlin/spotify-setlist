import React from 'react';
import PropTypes from 'prop-types';
import DevTools from '../DevTools';
import Header from '../Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <DevTools />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
