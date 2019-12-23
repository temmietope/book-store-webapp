import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./Context/auth/AuthState";
import BookState from "./Context/book/BookState";

ReactDOM.render(
  <AuthState>
    <BookState>
      <App />
    </BookState>
  </AuthState>,
  document.getElementById("root")
);
