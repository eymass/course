import * as constants from "./constants";


export const getAuth = () => ({
    type: constants.GET_AUTH,
});

export const getAuthSuccess = payload => ({
    type: constants.GET_AUTH_SUCCESS,
    payload,
});

export const getAuthError = payload => ({
    type: constants.GET_AUTH_ERROR,
    payload,
});

export const logout = () => ({
    type: constants.LOGOUT,
});
