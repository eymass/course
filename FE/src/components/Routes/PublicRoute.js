import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

const PublicRoute = ({ path, Component, exact, isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to="/" />;
    }
    return <Route component={Component} exact={exact} path={path} />;
};

PublicRoute.propTypes = {
    path: PropTypes.string,
    Component: PropTypes.object,
    exact: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
};

export default PublicRoute;
