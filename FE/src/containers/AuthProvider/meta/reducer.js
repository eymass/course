/*
 *
 * AuthProvider reducer
 *
 */
import { getDataFromStorage } from 'utils/cookies';
import produce from 'immer';
import {
  AUTHENTICATE,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  RESET_APP_STATE,
  LOGOUT,
  IS_LOADING,
  CLEAR_AUTH_DATA,
} from './constants';
import { getIsAuthenticated } from './service';

// Get user token from storage
const { token, tokenExpiryTime, user } = getDataFromStorage();

export const initialState = {
  token,
  tokenExpiryTime,
  userData:
    user && typeof user === 'string' ? JSON.parse(user) : {},
  error: null,
  isAuthenticated: getIsAuthenticated(token, tokenExpiryTime),
  isLoading: false,
};

/* eslint-disable no-param-reassign */
const authProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      /**
       * ====================
       * Is Loading
       * ====================
       */
      case IS_LOADING:
        draft.isLoading = action.isLoading;
        break;
      case AUTHENTICATE:
        draft.error = null;
        break;
      /**
       * ====================
       * Authenticate Success
       * ====================
       */
      case AUTHENTICATE_SUCCESS: {
        draft.userData = action.userData;
        draft.userData.username = action.userData.username;
        draft.error = null;
        draft.token = action.tokenData.token;
        draft.tokenExpiryTime = action.tokenData.tokenExpiryTime;
        draft.isAuthenticated = true;
        break;
      }
      /**
       * ====================
       * Authenticate Error
       * ====================
       */
      case AUTHENTICATE_ERROR:
        draft.error = null;
        break;
      /**
       * ====================
       * Reset App
       * ====================
       */
      case RESET_APP_STATE: {
        draft.userData = null;
        draft.error = null;
        draft.username = null;
        draft.token = '';
        draft.tokenExpiryTime = 0;
        draft.isAuthenticated = false;
        break;
      }
      /**
       * ====================
       * Reset App
       * ====================
       */
      case CLEAR_AUTH_DATA: {
        draft.userData = null;
        draft.error = null;
        draft.username = null;
        draft.token = '';
        draft.tokenExpiryTime = 0;
        draft.isAuthenticated = false;
        break;
      }
      /**
       * ====================
       * Reset App
       * ====================
       */
      case LOGOUT: {
        draft.userData = null;
        draft.error = null;
        draft.username = null;
        draft.token = '';
        draft.tokenExpiryTime = 0;
        draft.isAuthenticated = false;
        break;
      }
      default:
        break;
    }
  });

export default authProviderReducer;
