/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getTheme } from './theme';
import {UPDATE_THEME_MODE} from "./constants";

export const initialState = {
    theme: getTheme(),
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
        case UPDATE_THEME_MODE:
            // 'light' or 'dark'
            draft.theme = getTheme(action.payload);
            break;
      default:
        break;
    }
  });

export default appReducer;
