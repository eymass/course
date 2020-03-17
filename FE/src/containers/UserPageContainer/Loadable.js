/**
 *
 * Asynchronously loads the component for LoginPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(/* webpackChunkName: "userPage" */ () => import('./index'));
