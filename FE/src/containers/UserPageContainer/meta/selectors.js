import { initialState } from './reducer';
/**
 * Get UserPage
 * @param state
 * @returns {Object}
 */
export const get = state => state.UserPage || initialState;
