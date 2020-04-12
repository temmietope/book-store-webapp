import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/auth/authContext";
import BookContext from "../../Context/book/bookContext";
import AlertContext from "../../Context/alert/alertContext";
import Alerts from "../layouts/Alerts";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated, user } = authContext;
  const { getUserCart } = bookContext;

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
    console.log("clicked")
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      await login({
        email,
        password,
      });
      (await user) && getUserCart(user._id);
      console.log("gotten cart from db");
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
      </form>
    </div>
  );
};

export default Login;
