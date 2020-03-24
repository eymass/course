import {all} from 'redux-saga/effects';
import authSaga from 'containers/AuthContainer/meta/saga';

export default function* saga() {
    yield all([
        authSaga()
    ]);
}

