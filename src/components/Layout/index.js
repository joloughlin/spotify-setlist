import React, { PropTypes } from 'react';
import DevTools from 'containers/DevTools';
import Header from 'components/Header';

// eslint-disable-next-line no-undef
let devToolsComponent = __DEVELOPMENT__ && <DevTools />;

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    {devToolsComponent}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
