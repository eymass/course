import { call, put } from 'redux-saga/effects';
import { getEndpointURL } from 'utils/endpoint';
import jwt from 'jwt-decode';
import { authenticate as authenticateRequest } from 'utils/requestMapper';
import { isGoodString } from 'utils/HelperFunctions';
import { postData } from 'utils/network';
import * as actions from './actions';
import { clearDataFromStorage, saveDataToStorage } from '../../../utils/cookies';

export function* authenticateServer(username, password) {
  if (isGoodString(username, 1) && isGoodString(password, 1)) {
    const endpointUrl = getEndpointURL('AUTHENTICATE');
    // eslint-disable-next-line no-unused-vars
    const mappedRequest = authenticateRequest({
      username,
      password,
    });
    debugger;
    const rawResponse = yield call(
      postData,
      endpointUrl,
      mappedRequest,
    );
    debugger;
    const response = rawResponse;
    if (response && response.token) {
      const tokenData = encodeJwtToken(response.token);
      const userData = response.user;
      debugger;
      yield put(
        actions.authenticateSuccess(userData, {
          ...tokenData,
          tokenExpiryTime: tokenData.tokenExpiryTime * 1000,
        }),

      );
      debugger;
      yield call(saveDataToStorage, {
        token: tokenData.token,
        user: {
          name: userData.name,
          role: userData.role,
          email: userData.email,
          picture: userData.picture,
        },
        tokenExpiryTime: tokenData.tokenExpiryTime * 10000,
      });
    } else {
      yield put(actions.clearAuthData());
      yield call(clearDataFromStorage);
    }
  }
}

export const getIsAuthenticated = (_token, _tokenExpiryTime) => {
  if (_token && _tokenExpiryTime) {
    const tryResult = Number(_tokenExpiryTime) > new Date().getTime();
    return tryResult;
  }
  return false;
};

const encodeJwtToken = token => {
  const decoded = jwt(token, 'Eymas');
  return {
    username: decoded.sub,
    tokenExpiryTime: decoded.exp,
    token,
    createdAt: decoded.iat,
  };
};
