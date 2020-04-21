import * as constants from "./constants";


export const getVacationDetails = vacationId => ({
    type: constants.GET_VACATIONDETAILS,
    vacationId
});

export const getVacationDetailsSuccess = payload => ({
    type: constants.GET_VACATIONDETAILS_SUCCESS,
    payload,
});

export const getVacationDetailsError = payload => ({
    type: constants.GET_VACATIONDETAILS_ERROR,
    payload,
});
