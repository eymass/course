/**
 *
 * AuthProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthProvider, {
  makeSelectIsAuthenticated,
} from './meta/selectors';
import Routes from './components/Routes';

/**
 * Authentication main Container.
 */
export function AuthProvider({ isAuthenticated }) {
    return (
        <Routes isAuthenticated={isAuthenticated} />
    );
}

AuthProvider.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  authProvider: makeSelectAuthProvider(),
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default withConnect(AuthProvider);
