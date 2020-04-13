import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
import AlertContext from "../../Context/alert/alertContext";
import Alerts from "../layouts/Alerts";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [userlog, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userlog;

  const onChange = (e) =>
    setUser({ ...userlog, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      await login({
        email,
        password,
      });
    }
  };
  return (
    <div className="register">
      <h1>
        {" "}
        Account <span className="font-pink">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-alert">
          <Alerts />
        </div>
        <button type="submit" value="register" className="register-btn">
          Login
        </button>
        <p className="switch-register-and-login">
          <small>
            Don't have an account? <Link to="/register">Register</Link>
          </small>
          <small>
            Forgot Password
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
