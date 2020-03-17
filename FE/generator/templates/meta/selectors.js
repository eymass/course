import { initialState } from './reducer';
/**
 * Get CONT_NAME
 * @param state
 * @returns {Object}
 */
export const get = state => state.CONT_NAME || initialState;
