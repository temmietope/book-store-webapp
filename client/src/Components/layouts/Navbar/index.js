import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../../Context/auth/authContext";
import BookContext from "../../../Context/book/bookContext";
import "./Navbar.css";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearBooks, cart } = bookContext;

  const onLogout = () => {
    logout();
    clearBooks();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <NavLink to="/my_books" className="link" activeClassName="active">
          My Book
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="link" activeClassName="active">
          Cart {cart && cart.length}
        </NavLink>
      </li>
      <li to="/" className="link" onClick={onLogout}>
        <i className="fas fa-sign-out-alt" />
        <span>Logout</span>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );
  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="link">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
