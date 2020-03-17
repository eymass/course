import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
};

/* eslint-disable no-param-reassign */
const CONT_NAME = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_CONT_CAPITAL_NAME_SUCCESS:
                draft.items = action.payload;
                break;
            case constants.GET_CONT_CAPITAL_NAME_ERROR:
                break;
            default:
                break;
        }
    });

export default CONT_NAME;
