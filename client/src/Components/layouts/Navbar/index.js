import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
          <li>
              <Link to="/" className="link">Home</Link>
          </li>
          <li>
              <Link to="/about" className="link">About</Link>
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
