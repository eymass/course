import { combineReducers } from "redux";
import app from '../containers/App/meta/reducer';
import loginPage from '../containers/LoginPage/meta/reducer';
import vacations from 'containers/VacationsContainer/meta/reducer';
import profile from 'containers/ProfileContainer/meta/reducer';

export default combineReducers({
    loginPage,
    app,
    profile,
    vacations,
});

