import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../Context/alert/alertContext";
import AuthContext from "../../Context/auth/authContext";
import Alerts from "../layouts/Alerts";

const ResetPassword = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { resetPassword, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const INITIAL_STATE = {
    password: "",
    password2: "",
  };
  const [user, setUser] = useState(INITIAL_STATE);

  const { password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "" || password2 === "") {
      setAlert("please enter all field", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      resetPassword({
        password,
      });
    }
  };
  return (
    <div className="register">
      <h1>Reset Password</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm new Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-alert">
          <Alerts />
        </div>
        <button type="submit" value="register" className="register-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
