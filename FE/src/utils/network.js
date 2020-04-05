import axios from 'axios';
import {BASE_URL} from "./environment";
import {getDataFromStorage} from "./cookies";

axios.interceptors.response.use(
    response => response.data
);

function networkService() {
    const { token } = getDataFromStorage();
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const baseUrl = BASE_URL;

    function setCredentials(token) {
        headers.Authorization = `Bearer ${token}`;
    }

    function* postData(action, body) {
        const url = baseUrl + action;
        const config = { headers };
        return yield axios.post(url, body, config);
    }

    function* getData(action, params) {
        const url = baseUrl + action;
        debugger;
        const config = { headers, params };
        return yield axios.get(url, config);
    }

    function* putData(action, body) {
        const url = baseUrl + action;
        const config = { headers };
        return yield axios.put(url, body, config);
    }

    function* deleteData(action) {
        const url = baseUrl + action;
        const config = { headers };
        return yield axios.delete(url, config);
    }

    return {
        setCredentials,
        getData,
        postData,
        putData,
        deleteData,
    }
}

const network = networkService();

export default network;
