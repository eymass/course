import { initialState } from './reducer';
/**
 * Get Navigation
 * @param state
 * @returns {Object}
 */
export const get = state => state.Navigation || initialState;
