import axios from 'axios';
import { getDataFromStorage } from './cookies';
import { BASE_URL } from './environment';

axios.interceptors.response.use(
    response => response.data
);

function networkService() {
  const baseUrl = BASE_URL;
  const headers = {
    Authorization: `Bearer ${getDataFromStorage().token}`,
  };

  function setToken(token) {
    headers.Authorization = `Bearer ${token}`;
  }

  /**
   * Get Data
   * @param action
   * @param params
   */
  function* getData(action, params = {}) {
    const url = baseUrl + action;
    const config = { headers, url, params };
    return yield axios
        .get(url, config);
  }

  /**
   *
   * @param action
   * @param body
   */
  function* postData(action, body) {
    const url = baseUrl + action;
    const config = { headers, url };
    return yield axios.post(url, body, config);
  }

  /**
   * delete data
   * @param action
   */
  function* deleteData(action) {
    const url = baseUrl + action;
    const config = { headers, url };
    return yield axios.delete(url, config);
  }

  /**
   * Put data to server
   */
  function* putData(action, body) {
    const url = `${baseUrl + action}`;
    const config = { headers, url };
    return yield axios.put(url, body, config);
  }

  return {
    putData,
    getData,
    postData,
    deleteData,
    setToken,
  };

}

const network  = networkService();
export default network;
