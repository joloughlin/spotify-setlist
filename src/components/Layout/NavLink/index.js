import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

const NavLink = ({ children, ...props }) =>
  <li className={styles.container}>
    <Link {...props} className={styles.link}>
      {children}
    </Link>
  </li>;

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLink;
