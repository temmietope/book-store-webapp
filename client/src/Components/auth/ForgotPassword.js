import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/auth/authContext";
import AlertContext from "../../Context/alert/alertContext";
import Alerts from "../layouts/Alerts";

const ForgotPassword = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { forgotPassword, error, clearErrors } = authContext;

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error]);
  const [userlog, setEmail] = useState({ email: "" });

  const { email } = userlog;
  const onChange = (e) =>
    setEmail({ ...userlog, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert("Please enter your email", "danger");
    } else {
      try {
        forgotPassword({ email });
      } catch (err) {
        console.log(err)
        setAlert(error, "danger");
      }
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
