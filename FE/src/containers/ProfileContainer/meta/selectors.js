import { initialState } from './reducer';
/**
 * Get Profile
 * @param state
 * @returns {Object}
 */
const select = state => state.profile || initialState;
export const selectUser = state => select(state).user;
export const selectOrders = state => select(state).orders;
