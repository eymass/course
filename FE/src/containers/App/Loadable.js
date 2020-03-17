/**
 *
 * Asynchronously loads the component for DateTimeProvider
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
