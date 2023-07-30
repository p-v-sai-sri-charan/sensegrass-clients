//axiosInstance.js

import axios from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'http://ec2-16-171-64-144.eu-north-1.compute.amazonaws.com:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookie.get('token'),
    },
    AccessControlAllowOrigin: '*',
});

export default axiosInstance;
