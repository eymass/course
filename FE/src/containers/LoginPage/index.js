/**
 *
 * LoginPage
 *
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import makeSelectLoginPage from './meta/selectors';
import { loginFieldChange } from './meta/actions';
import { authenticate } from '../AuthProvider/meta/actions';
import styles from './styles';
import LoginPage from "./components/LoginPage";

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchUsernameChange: (value) => dispatch(loginFieldChange('username', value)),
    dispatchPasswordChange: (value) => dispatch(loginFieldChange('password', value)),
    dispatchAuthenticate: () =>   dispatch(authenticate()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withStyles(styles),
)(LoginPage);
