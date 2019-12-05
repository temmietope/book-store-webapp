import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <NavLink to="/" className="link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="link" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="link" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Book Garden",
  icon: "fas fa-rocket"
};

export default Navbar;
