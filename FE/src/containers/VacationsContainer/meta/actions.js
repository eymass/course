import * as constants from "./constants";


export const getVacations = () => ({
    type: constants.GET_VACATIONS,
});

export const getVacationsSuccess = payload => ({
    type: constants.GET_VACATIONS_SUCCESS,
    payload,
});

export const getVacationsError = payload => ({
    type: constants.GET_VACATIONS_ERROR,
    payload,
});
