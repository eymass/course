/**
 *
 * LoginLayout
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prop-types */
function LoginLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: '100vh', minWidth: '50vw' }}
    >
      {children}
    </Grid>
  );
}

export default LoginLayout;
