import { initialState } from './reducer';
/**
 * Get Vacations
 * @param state
 * @returns {Object}
 */
export const select = state => state.vacations || initialState;
