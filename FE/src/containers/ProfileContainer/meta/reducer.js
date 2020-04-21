import produce from 'immer';
import * as constants from "./constants";

const statuses = {
    active: 'active',
    inactive: 'inactive'
};

export const initialState = {
    user: {},
    orders: [],
    status: statuses.inactive
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
            case constants.UPDATE_USER_STATUS:
                if (state.status === statuses.active) {
                    draft.status = statuses.inactive;
                } else {
                    draft.status = statuses.active;
                }
                break;
            default:
                break;
        }
    });

export default Profile;
