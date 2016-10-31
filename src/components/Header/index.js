import React from 'react';
import { Link } from 'react-router';
import './styles.scss';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
