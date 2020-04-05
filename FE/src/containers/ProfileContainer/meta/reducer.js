import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
    user: {},
    orders: [],
};

/* eslint-disable no-param-reassign */
const Profile = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_PROFILE_SUCCESS:
                draft.user = action.payload.user;
                draft.orders = action.payload.orders;
                break;
            case constants.GET_PROFILE_ERROR:
                break;
            default:
                break;
        }
    });

export default Profile;
