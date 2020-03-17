import { takeLatest, call, put, select } from 'redux-saga/effects';
import { saveDataToStorage, clearDataFromStorage } from 'utils/cookies';

import { AUTHENTICATE, LOGOUT, RESET_APP_STATE } from './constants';
import { authenticateServer } from './service';
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
/**
 * Send Authentication request
 * Evaluate response
 * Save authentication data to storage
 * Sync authentication with browser
 *
 * Error handling
 * @function
 */
function* authenticateUser() {
  try {
    const loginPage = yield select(makeSelectLoginPage());
    debugger;
    yield authenticateServer(loginPage.username, loginPage.password);
  } catch (error) {
    debugger;
    console.warn(JSON.stringify(error));
  }
}

/**
 * Logout User
 * @generator
 */
function* logoutUser() {
  yield call(clearDataFromStorage);
  yield put({ type: RESET_APP_STATE });
}

/**
 * Authentication Watcher
 * @watcher
 */
function* authProviderSaga() {
  yield takeLatest(AUTHENTICATE, authenticateUser);
  yield takeLatest(LOGOUT, logoutUser);
}

export default authProviderSaga;
