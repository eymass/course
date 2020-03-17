import {all} from 'redux-saga/effects';
import authProvider from '../containers/AuthProvider/meta/saga';

export default function* saga() {
    yield all([
        authProvider()
    ]);
}

