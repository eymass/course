import { initialState } from './reducer';
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
export const getAuth = state => state.auth || initialState;

export const getUser = state => getAuth(state).user;
