import { combineReducers } from "redux";
import app from '../containers/App/meta/reducer';
import loginPage from '../containers/LoginPage/meta/reducer';

export default combineReducers({
    loginPage,
    app,
});

