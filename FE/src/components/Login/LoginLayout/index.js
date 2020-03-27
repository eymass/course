/**
 *
 * LoginLayout
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function LoginLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: '100vh', minWidth: '50vw' }}
    >
      <Paper variant="elevation">
      {children}
      </Paper>
    </Grid>
  );
}

export default LoginLayout;
