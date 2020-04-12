import React, { Fragment, useContext, useEffect } from "react";
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


  const authLinks = (
    <Fragment>
      <li>Hello</li>
      <li>
        <NavLink to="/" className="link" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/my_books" className="link" activeClassName="active">
          My Book
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="link" activeClassName="active">
          Cart
        </NavLink>
      </li>
      <li to="/" className="link">
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
        <NavLink to="/register" className="link" activeClassName="active">
          Signup
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
          BOOKIE
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      {/* <ul>{guestLinks}</ul> */}
    </div>
  );
};
export default Navbar;
