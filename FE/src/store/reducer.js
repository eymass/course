import { combineReducers } from "redux";
import app from '../containers/App/meta/reducer';
import loginPage from '../containers/LoginPage/meta/reducer';
import auth from 'containers/AuthContainer/meta/reducer';

export default combineReducers({
    loginPage,
    app,
    auth,
});

