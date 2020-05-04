import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layouts/Navbar/index";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import PrivateRoute from "./Components/routing/PrivateRoute";
import MyBooks from "./Components/pages/MyBooks";
import Cart from "./Components/pages/Cart";
import Spinner from "./Components/layouts/Spinner";
import AuthContext from "./Context/auth/authContext";
import BookContext from "./Context/book/bookContext";
import ForgotPassword from "./Components/auth/ForgotPassword";
import ResetPassword from "./Components/auth/ResetPassword";

const App = () => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);
  const { loadUser, loading } = authContext;
  const { getAllBooks } = bookContext;
  useEffect(() => {
    async function fetchUser() {
      getAllBooks();
      await loadUser();
    }
    fetchUser();
  }, [loading]);
  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <div className="app">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot_password" component={ForgotPassword} />
              <Route exact path="/reset_password" component={ResetPassword} />

              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute exact path="/my_books" component={MyBooks} />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
