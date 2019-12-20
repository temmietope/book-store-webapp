import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "./Context/auth/AuthState";

ReactDOM.render(
  <AuthState>
    <App />
  </AuthState>,
  document.getElementById("root")
);
