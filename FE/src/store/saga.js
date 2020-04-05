import {all} from 'redux-saga/effects';
import vacationsSaga from 'containers/VacationsContainer/meta/saga';
import profileSaga from 'containers/ProfileContainer/meta/saga';

export default function* saga() {
    yield all([
        vacationsSaga(),
        profileSaga()
    ]);
}

