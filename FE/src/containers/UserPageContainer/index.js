import React from 'react';
import { connect } from 'react-redux';
import UserPage from './components/UserPage';
import {createStructuredSelector} from "reselect";
import makeSelectAuthProvider, {makeSelectIsAuthenticated} from "../AuthProvider/meta/selectors";
import {logout} from "../AuthProvider/meta/actions";

const mapStateToProps = createStructuredSelector({
    authProvider: makeSelectAuthProvider(),
    isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

const UserPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserPage);

export default UserPageContainer;
