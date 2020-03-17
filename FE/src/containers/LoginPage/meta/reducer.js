/* eslint-disable no-param-reassign */
/*
 *
 * LoginPage reducer
 *
 */

import { produce } from 'immer';
import { LOGIN_FIELD_CHANGE } from './constants';

export const initialState = {
  username: '',
  password: '',
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      /**
       * Login Field Change
       */
      case LOGIN_FIELD_CHANGE: {
        if (action.fieldName === 'password') {
          draft.password = action.value;
          break;
        }
        draft.username = action.value;
        break;
      }
      default:
        break;
    }
  });

export default loginPageReducer;
