import * as constants from "./constants";


export const getProfile = () => ({
    type: constants.GET_PROFILE,
});

export const getProfileSuccess = payload => ({
    type: constants.GET_PROFILE_SUCCESS,
    payload,
});

export const getProfileError = payload => ({
    type: constants.GET_PROFILE_ERROR,
    payload,
});
