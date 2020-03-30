import produce from 'immer';
import { getDataFromStorage } from 'utils/cookies';
import * as constants from "./constants";

const { token, user } = getDataFromStorage();

const getUser = userString => userString && JSON.parse(userString);

export const initialState = {
    token,
    user: getUser(user),
    isAuthenticated: !!token,
};

/* eslint-disable no-param-reassign */
const Auth = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_AUTH_SUCCESS:
                draft.token = action.payload.token;
                draft.user = action.payload.user;
                draft.isAuthenticated = true;
                break;
            case constants.GET_AUTH_ERROR:
                break;
            default:
                break;
        }
    });

export default Auth;
