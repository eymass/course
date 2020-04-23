import { initialState } from './reducer';
import { createSelector } from 'reselect';
/**
 * Get Vacations
 * @param state
 * @returns {Object}
 */
export const select = state => state.vacations || initialState;

export const selectVacations = state => select(state).vacations;

export const makeSelectVacations = createSelector(selectVacations, vacations => {
    console.log('Hello selectVacations');
    return vacations.map(vacation => ({...vacation, price: 100}));
});

export const selectDiscounts = state => select(state).discounts;

export const selectShowDiscounts = state => select(state).showDiscounts;

export const selectSelectedVacation = state => select(state).selectedVacation;
