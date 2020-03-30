import Cookies from 'js-cookie';

/**
 * save auth data to storage
 * clear auth data from storage
 * get auth data from storage
 */

Cookies.defaults.expires = 1;

const domain = window.location.hostname;

const path = '';

// save auth data to storage
export const saveDataToStorage = ({ token, user }) => {
  Cookies.set('token', token, { domain, path });
  Cookies.set('user', JSON.stringify(user), { domain, path });
};

// clear auth data from storage
export const clearDataFromStorage = () => {
  Cookies.remove('token', { domain, path });
  Cookies.remove('user', { domain, path });
};

// get auth data from storage
export const getDataFromStorage = () => ({
  token: Cookies.get('token', { domain, path }),
  user: Cookies.get('user', { domain, path }),
});
