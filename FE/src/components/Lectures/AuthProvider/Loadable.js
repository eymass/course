/**
 *
 * Asynchronously loads the component for AuthProvider
 *
 */
import React from 'react'
import loadable from 'utils/loadable';

export default loadable(() => import('./index'), {LoadingComponent: <div>loading</div>});
