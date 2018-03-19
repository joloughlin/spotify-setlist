import React from 'react';
import NavLink from '../NavLink';
import { loginPath, rootPath } from 'utils/paths';
import styles from './styles.css';
import enhance from './enhance';

export const text = {
  logIn: 'Log In',
  logOut: 'Log Out',
};

const NavLinks = ({ isAuthenticated, logOut }) => (
  <nav>
    <ul className={styles.container}>
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

export default enhance(NavLinks);
