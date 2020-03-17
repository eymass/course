/**
 *
 * PublicRoute
 *
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* eslint-disable react/prop-types */
function PublicRoute({
  exact,
  component: Component,
  isAuthenticated,
  isProgressLoading,
  ...children
}) {
  return (
    <Route
      exact={exact}
      render={props =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  );
}

export default PublicRoute;
