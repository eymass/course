/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types */
function PrivateRoute({
  exact,
  component: Component,
  isAuthenticated,
  isProgressLoading,
  ...children
}) {
  if (isAuthenticated === true) {
    return (
      <Route
        exact={exact}
        {...children}
        render={props => (
          <Component {...props} isProgressLoading={isProgressLoading} />
        )}
      />
    );
  }
  return <Redirect to="login" />;
}

export default PrivateRoute;
