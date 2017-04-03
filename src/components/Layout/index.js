import React, { PropTypes } from 'react';
import DevTools from 'containers/DevTools';
import HeaderContainer from 'containers/HeaderContainer';
import { isDevelopment } from 'constants/values';

const Layout = ({ children }) => (
  <div>
    <HeaderContainer />
    <div className="container">
      {children}
    </div>
    {isDevelopment && <DevTools />}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
