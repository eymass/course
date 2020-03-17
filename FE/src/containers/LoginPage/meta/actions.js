/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, LOGIN_FIELD_CHANGE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginFieldChange(fieldName, value) {
  return {
    fieldName,
    value,
    type: LOGIN_FIELD_CHANGE,
  };
}
