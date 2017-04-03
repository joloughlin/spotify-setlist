import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = ({ currentUser, onLogOutClick }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/private">Private</Link></li>
          <li>
            {currentUser
              ? <Link onClick={onLogOutClick} to="/">Log Out</Link>
              : <Link to="/login">Log In</Link>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
