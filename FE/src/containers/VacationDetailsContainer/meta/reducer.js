import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
    vacation: {}
};

/* eslint-disable no-param-reassign */
const VacationDetails = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case constants.GET_VACATIONDETAILS_SUCCESS:
                draft.vacation = action.payload;
                break;
            case constants.GET_VACATIONDETAILS_ERROR:
                break;
            default:
                break;
        }
    });

export default VacationDetails;
