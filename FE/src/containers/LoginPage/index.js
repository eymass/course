/**
 *
 * LoginPage
 *
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectLoginPage from './meta/selectors';
import { loginFieldChange } from './meta/actions';
import LoginPage from "./components/LoginPage";
import {getAuth} from "../AuthContainer/meta/actions";

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchUsernameChange: (value) => dispatch(loginFieldChange('username', value)),
    dispatchPasswordChange: (value) => dispatch(loginFieldChange('password', value)),
    dispatchAuthenticate: () => dispatch(getAuth())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
)(LoginPage);
