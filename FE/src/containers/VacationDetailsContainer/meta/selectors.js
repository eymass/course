import { initialState } from './reducer';
/**
 * Get VacationDetails
 * @param state
 * @returns {Object}
 */
export const select = state => state.vacationDetails || initialState;

export const selectVacation = state => select(state).vacation;
