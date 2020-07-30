import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetCONT_CAMEL_NAME(action) {
    try {
        yield put(actions.getCONT_CAMEL_NAMESuccess())
    } catch(error) {
        yield put(actions.getCONT_CAMEL_NAMEError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_CONT_CAPITAL_NAME, handleGetCONT_CAMEL_NAME),
    ]);
}
