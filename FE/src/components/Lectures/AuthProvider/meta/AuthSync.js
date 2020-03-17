import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAuthData, invalidateAuthData } from './actions';
import { clearDataFromStorage } from '../../utils/cookies';
import { toasterOpenToaster } from '../Toaster/actions';

export const syncAuth = data => {
  localStorage.setItem('loginEvent', JSON.stringify(data));
  localStorage.removeItem('loginEvent');
};

const requestLogout = new CustomEvent('requestLogout');
export const triggerLogout = () => {
  window.dispatchEvent(requestLogout);
};

class AuthSync extends React.Component {
  componentWillMount() {
    // Listen to logout/login events from other tabs
    window.addEventListener('requestLogout', this.handleLogout);
  }

  handleLogout = () => {
    this.handleLocalLogout();
    this.props.dispatch(invalidateAuthData());
  };

  /**
   * Logout clear state
   * @param sessionTimeout
   */
  handleLocalLogout = () => {
    clearDataFromStorage();
    this.props.dispatch(clearAuthData());

    this.props.dispatch(
      toasterOpenToaster({
        error: '',
      }),
    );
  };

  render() {
    return null;
  }
}

AuthSync.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapDispatchToProps);

export default withConnect(AuthSync);
