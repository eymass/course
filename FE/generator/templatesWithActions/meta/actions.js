import * as constants from "./constants";


export const getCONT_CAMEL_NAME = () => ({
    type: constants.GET_CONT_CAPITAL_NAME,
});

export const getCONT_CAMEL_NAMESuccess = payload => ({
    type: constants.GET_CONT_CAPITAL_NAME_SUCCESS,
    payload,
});

export const getCONT_CAMEL_NAMEError = payload => ({
    type: constants.GET_CONT_CAPITAL_NAME_ERROR,
    payload,
});
