import React, { memo } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/Common/PrivateRoute';
import PublicRoute from 'components/Common/PublicRoute';
import PropTypes from 'prop-types';
import { menuContent } from '../../../content/Menu';

/**
 * Routing
 * PrivateRoute for authenticated
 * PublicRoute for public
 */

function Routes({ isAuthenticated }) {
  const getRoutes = () => {
    if (menuContent) {
      return menuContent.map(route => getRouteElement(route));
    }
    return [];
  };

  const getRouteElement = route => {
    if (route) {
      return route.isPrivate ? (
        <PrivateRoute
          exact={route.isExact}
          isAuthenticated={isAuthenticated}
          path={route.path}
          component={route.component}
        />
      ) : (
        <PublicRoute
          exact={route.isExact}
          isAuthenticated={isAuthenticated}
          path={route.path}
          component={route.component}
        />
      );
    }
    return '';
  };

  return <Switch>{getRoutes()}</Switch>;
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default memo(Routes);
