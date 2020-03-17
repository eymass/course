import { combineReducers } from "redux";
import authProvider from '../containers/AuthProvider/meta/reducer';
import app from '../containers/App/meta/reducer';
import loginPage from '../containers/LoginPage/meta/reducer';

export default combineReducers({
    authProvider,
    loginPage,
    app,
});

