import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../NavLink';
import { loginPath, rootPath } from 'utils';
import styles from './styles.css';
import enhance from './enhance';

export const text = {
  logIn: 'Log In',
  logOut: 'Log Out',
};

const NavLinks = ({ isAuthenticated, logOut }) => (
  <nav>
    <ul className={styles.root}>
      {isAuthenticated ? (
        <NavLink onClick={logOut} to={rootPath}>
          {text.logOut}
        </NavLink>
      ) : (
        <NavLink to={loginPath}>{text.logIn}</NavLink>
      )}
    </ul>
  </nav>
);

NavLinks.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default enhance(NavLinks);
