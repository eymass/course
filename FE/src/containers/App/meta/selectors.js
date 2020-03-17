import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => state.app || initialState;

const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

const makeSelectTheme = () =>
  createSelector(selectAppDomain, state => state.theme);

export default makeSelectApp;

export { makeSelectTheme };
