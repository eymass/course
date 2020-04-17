import {all} from 'redux-saga/effects';
import authSaga from 'containers/AuthContainer/meta/saga';
import vacationsSaga from 'containers/VacationsContainer/meta/saga';
import profileSaga from 'containers/ProfileContainer/meta/saga';
import vacationDetailsSaga from 'containers/VacationDetailsContainer/meta/saga';

export default function* saga() {
    yield all([
        authSaga(),
        vacationsSaga(),
        profileSaga(),
        vacationDetailsSaga()
    ]);
}

