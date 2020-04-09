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

// import BookState from "./Context/book/BookState";
import BookContext from "./Context/book/bookContext";
import AuthContext from "./Context/auth/authContext";
import AlertState from "./Context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import MyBooks from "./Components/pages/MyBooks";
import Cart from "./Components/pages/Cart";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);
  const { loadUser, user, isAuthenticated } = authContext;
  const { getUserCart, cart } = bookContext;

  useEffect(() => {
    user && getUserCart(user._id)
    console.log(cart)
    // async function loadUserAndSetCart() {
    //   await loadUser();
    //   if (isAuthenticated && user) {
    //     console.log(user);
    //     await getUserCart(user.id);
    //     console.log(cart);
    //   }
    // };
    // loadUserAndSetCart()
    // console.log(user);
  }, []);
  return (
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
              <Route exact path="/cart" component={Cart} />

              <PrivateRoute exact path="/my_books" component={MyBooks} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  );
};

export default App;
