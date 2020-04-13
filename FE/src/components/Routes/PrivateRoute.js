import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ path, Component, exact, isAuthenticated }) => {
    if(isAuthenticated) {
        return <Route component={Component} exact={exact} path={path} />;
    }
    return <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
    path: PropTypes.string,
    Component: PropTypes.object,
    exact: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
