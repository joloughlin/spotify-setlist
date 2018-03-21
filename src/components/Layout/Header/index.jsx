import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks';
import styles from './styles.css';

export const text = {
  brandLink: 'INTREPID PROJECT',
};

const Header = () => (
  <div className={styles.root}>
    <Link to="/" className={styles.brand}>
      {text.brandLink}
    </Link>
    <NavLinks />
  </div>
);

export default Header;
