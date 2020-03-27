/* eslint-disable no-param-reassign */
import produce from 'immer';

export const initialState = {
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  });

export default appReducer;
