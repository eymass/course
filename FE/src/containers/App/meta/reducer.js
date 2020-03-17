/* eslint-disable no-param-reassign */
import { DEFAULT_LOCALE, localeData } from 'utils/languageDefaults';
import produce from 'immer';
import { getTheme } from './theme';
import { UPDATE_THEME } from './constants';

const defaultFontAndDirection = localeData[DEFAULT_LOCALE];

export const initialState = {
  theme: getTheme(defaultFontAndDirection),
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      /**
       * Update Theme
       */
      case UPDATE_THEME: {
        draft.theme = getTheme(action);
        break;
      }
      default:
        break;
    }
  });

export default appReducer;
