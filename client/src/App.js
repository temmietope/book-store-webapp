import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layouts/Navbar/index";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/layouts/Alerts";
import PrivateRoute from "./Components/routing/PrivateRoute";

import BookState from "./Context/book/BookState";
import AuthState from "./Context/auth/AuthState";
import AlertState from "./Context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import MyBooks from "./Components/pages/MyBooks";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <BookState>
        <AlertState>
          <Router>
            <div className="app">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/my_books" component={MyBooks} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </BookState>
    </AuthState>
  );
};

export default App;
