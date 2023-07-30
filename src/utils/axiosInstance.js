//axiosInstance.js

import axios from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'https://sensegrass-serve.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookie.get('token'),
    },
    AccessControlAllowOrigin: '*',
});

export default axiosInstance;
