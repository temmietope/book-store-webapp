import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          !isAuthenticated && !loading ? (
            <Redirect to="login" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
