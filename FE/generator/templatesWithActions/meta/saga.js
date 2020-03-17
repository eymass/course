import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import {getData} from "utils/network";

function* handleGetCONT_CAMEL_NAME(action) {
    try {
        // todo URL
        const res = yield call(getData, 'URL');
        yield put(actions.getCONT_CAMEL_NAMESuccess(res))
    } catch(error) {
        yield put(actions.getCONT_CAMEL_NAMEError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_CONT_CAPITAL_NAME, handleGetCONT_CAMEL_NAME),
    ]);
}
