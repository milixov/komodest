import axios from 'axios';
import {BASE_URL} from './enums';

const axiosConfig = {
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status <= 500;
    },
};

export const axiosInstance = axios.create(axiosConfig);
export default axiosConfig;