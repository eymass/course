/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from "../LoginPage";
import { getAuth } from 'containers/AuthContainer/meta/selectors'
import NavigationContainer from "containers/NavigationContainer";
import { ThemeProvider } from "@material-ui/core";
import {selectTheme} from "./meta/selectors";

function App({ auth, theme }) {
  return (
      <ThemeProvider theme={theme}>
        {!auth.isAuthenticated && <LoginPage />}
        {auth.isAuthenticated && <NavigationContainer />}
      </ThemeProvider>);
}

App.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
  theme: selectTheme(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);
