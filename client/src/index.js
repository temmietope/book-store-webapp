import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./Context/auth/AuthState";
import BookState from "./Context/book/BookState";
import AlertState from "./Context/alert/AlertState";

ReactDOM.render(
  <AuthState>
    <BookState>
      <AlertState>
        <App />
      </AlertState>
    </BookState>
  </AuthState>,
  document.getElementById("root")
);
