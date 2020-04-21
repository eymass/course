import { initialState } from './reducer';
/**
 * Get Profile
 * @param state
 * @returns {Object}
 */
export const selectProfile = state => state.profile || initialState;
