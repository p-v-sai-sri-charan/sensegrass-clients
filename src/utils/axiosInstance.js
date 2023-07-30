//axiosInstance.js

import axios from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'https://sensegrass-server-nnfxeo2uw-sai-charan-au7.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookie.get('token'),
    },
});

export default axiosInstance;