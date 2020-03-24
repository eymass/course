import { initialState } from './reducer';
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
export const get = state => state.Auth || initialState;
