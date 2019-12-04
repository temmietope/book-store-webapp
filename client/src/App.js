import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layouts/Navbar/index";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import BookState from "./Context/book/BookState";
import AuthState from "./Context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <BookState>
        <Router>
          <div className="app">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </BookState>
    </AuthState>
  );
};

export default App;
