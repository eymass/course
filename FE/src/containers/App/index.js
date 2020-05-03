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
import { getAuth } from 'containers/AuthContainer/meta/selectors'
import NavigationContainer from "containers/NavigationContainer";
import { ThemeProvider } from "@material-ui/core";
import {selectTheme} from "./meta/selectors";
import {BrowserRouter} from "react-router-dom";

function App({ theme }) {
  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavigationContainer />
          </ThemeProvider>
      </BrowserRouter>);
}

App.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = (state) => ({
  theme: selectTheme(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);
