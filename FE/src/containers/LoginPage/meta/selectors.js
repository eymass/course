import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectLoginPagePassword = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.password,
  );

const makeSelectLoginPageUsername = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.username,
  );

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectLoginPagePassword,
  makeSelectLoginPageUsername,
};
