import axios from 'axios';
import { Url_Api } from '../api/Url_Api'; // Assuming your URL definitions are in 'apiConfig.js'

const AxiosInstance = axios.create({
    baseURL: Url_Api, // Using your base URL 'http://localhost:2010'
});

// Interceptor to include token in requests
AxiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default AxiosInstance;
