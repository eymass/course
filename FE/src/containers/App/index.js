/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { compose } from 'redux';
import ThemeProvider  from '@material-ui/styles';
import { connect } from 'react-redux';
import LoginPage from "../LoginPage";

function App({ theme }) {
  return (<ThemeProvider><LoginPage /></ThemeProvider>);
}

App.propTypes = {};

const withConnect = connect();

export default compose(
  withConnect,
)(App);
