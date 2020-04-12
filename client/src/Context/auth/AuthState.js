import React, { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import axios from "axios";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  useEffect(() => {
    loadUser();
  }, []);

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // //@todo - load token into global headers
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      console.log("not registered");
      dispatch({ type: AUTH_ERROR });
    }
  };

  //Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      let token = res.data.token;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: token,
      });
      loadUser();
      // getUserFromToken(token);
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", formData, config);
      let token = res.data.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //Logout
  const logout = () => dispatch({ type: LOGOUT });

  //Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        clearErrors,
        login,
        logout,
        // getUserFromToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
