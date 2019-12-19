import React, { useEffect, useContext } from "react";
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
import BookContext from "./Context/book/bookContext";
import AuthContext from "./Context/auth/authContext";
import AlertState from "./Context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import MyBooks from "./Components/pages/MyBooks";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);
  // const { user, isAuthenticated } = authContext;
  // const { getUserCart } = bookContext;

  

  
  useEffect(() => {
    // if (isAuthenticated) {
    //   console.log("user");
    //   // getUserCart(user._id);
    //   console.log(user);
    // }
  });
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
