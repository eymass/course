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
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import AuthProvider from 'containers/AuthProvider';
import { connect } from 'react-redux';
import {makeSelectTheme} from './meta/selectors';

function App({ theme }) {

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AuthProvider />
        </BrowserRouter>
      </ThemeProvider>
  );
}

App.propTypes = {
  theme: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  theme: makeSelectTheme(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
)(App);
