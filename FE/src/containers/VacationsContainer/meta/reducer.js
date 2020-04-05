import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
    vacations: [],
};

/* eslint-disable no-param-reassign */
const Vacations = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_VACATIONS_SUCCESS:
                draft.vacations = action.payload;
                break;
            case constants.GET_VACATIONS_ERROR:
                break;
            default:
                break;
        }
    });

export default Vacations;
