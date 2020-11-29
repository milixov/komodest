import axios from 'axios';
import {BASE_URL, APP_ID} from './enums';

const axiosConfig = {
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'app-id': APP_ID
    },
    validateStatus: function (status) {
        return status >= 200 && status <= 500;
    },
};

export const axiosInstance = axios.create(axiosConfig);
export default axiosConfig;