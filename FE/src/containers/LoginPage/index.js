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

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchUsernameChange: (value) => dispatch(loginFieldChange('username', value)),
    dispatchPasswordChange: (value) => dispatch(loginFieldChange('password', value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
)(LoginPage);
