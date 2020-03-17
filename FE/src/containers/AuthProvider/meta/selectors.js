import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authProvider state domain
 */

const selectAuthProviderDomain = state =>
  state.authProvider || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthProvider
 */
const makeSelectUserData = () =>
  createSelector(selectAuthProviderDomain, substate => substate.userData);

const makeSelectAuthProvider = () =>
  createSelector(selectAuthProviderDomain, substate => substate);

const makeSelectIsAuthenticated = () =>
  createSelector(selectAuthProviderDomain, substate =>
    substate.isAuthenticated,
  );

const makeSelectIsLoading = () =>
  createSelector(selectAuthProviderDomain, substate =>
    substate.isLoading,
  );

export default makeSelectAuthProvider;
export {
  makeSelectUserData,
  selectAuthProviderDomain,
  makeSelectIsAuthenticated,
  makeSelectIsLoading,
};
