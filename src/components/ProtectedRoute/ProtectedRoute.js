import { Redirect, Route } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      <>
      {
        props.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    </>
    </Route>
  );
};

export default ProtectedRoute;
