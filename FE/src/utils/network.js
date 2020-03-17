import axios from 'axios';
import { getDataFromStorage } from './cookies';
import { BASE_URL } from './environment';

axios.interceptors.response.use(
  response => response.data
);

const baseUrl = BASE_URL;

/**
 * Get Data
 * @param action
 * @param params
 */
export function* getData(action, params = {}) {
  const url = baseUrl + action;
  const headers = {
    Authorization: `Bearer ${getDataFromStorage().token}`,
  };
  const config = { headers, url, params };
  return yield axios
    .get(url, config)
    .then()
    .catch();
}

/**
 *
 * @param action
 * @param body
 */
export function* postData(action, body) {
  try {
    const url = baseUrl + action;
    const headers = {
      Authorization: `Bearer ${getDataFromStorage().token}`,
    };
    const config = { headers, url };
    return yield axios.post(url, body, config);
  } catch (error) {
    return { error: error && error.message ? error.message : 'Error' };
  }
}

/**
 * delete data
 * @param action
 */
export function* deleteData(action) {
  try {
    const url = baseUrl + action;
    const headers = {
      Authorization: `Bearer ${getDataFromStorage().token}`,
    };
    const config = { headers, url };
    return yield axios.delete(url, config);
  } catch (error) {
    return { error: error && error.message ? error.message : 'Error' };
  }
}

/**
 * Put data to server
 */
export function* putData(action, body) {
  try {
    const url = `${baseUrl + action}`;
    const headers = {
      Authorization: `Bearer ${getDataFromStorage().token}`,
    };
    const config = { headers, url };
    return yield axios.put(url, body, config);
  } catch (error) {
    return { error: error && error.message ? error.message : 'Error' };
  }
}
