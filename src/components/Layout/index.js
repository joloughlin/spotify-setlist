import React, { PropTypes } from 'react'
import DevTools from 'containers/DevTools'
import Header from 'components/Header'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    {__DEVELOPMENT__ && <DevTools />}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
