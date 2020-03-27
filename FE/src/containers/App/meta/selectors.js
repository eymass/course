import { initialState } from './reducer';

const getApp = state => state.app || initialState;

const selectTheme = state => getApp(state).theme;

export { selectTheme };
