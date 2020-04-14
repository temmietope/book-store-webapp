import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/auth/authContext";
import AlertContext from "../../Context/alert/alertContext";
import Alerts from "../layouts/Alerts";

const ForgotPassword = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { forgotPassword, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // if (isAuthenticated) {
    //   props.history.push("/");
    // }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert("Please enter your email", "danger");
    } else {
      await forgotPassword(email);
    }
  };
  return (
    <div className="register">
      <h1>Forgot Password</h1>
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
        <div className="form-alert">
          <Alerts />
        </div>
        <button type="submit" value="register" className="register-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
