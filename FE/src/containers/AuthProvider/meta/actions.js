/*
 *
 * AuthProvider actions
 *
 */

import {
  DEFAULT_ACTION,
  AUTHENTICATE,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  LOGOUT,
  CLEAR_AUTH_DATA,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function authenticate() {
  return {
    type: AUTHENTICATE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function invalidateAuthData() {
  return {
    type: LOGOUT,
  };
}

export function clearAuthData() {
  return {
    type: CLEAR_AUTH_DATA,
  };
}

export function authenticateSuccess(userData, tokenData) {
  return {
    userData,
    tokenData,
    type: AUTHENTICATE_SUCCESS,
  };
}

export function authenticateError(error) {
  return {
    error,
    type: AUTHENTICATE_ERROR,
  };
}
