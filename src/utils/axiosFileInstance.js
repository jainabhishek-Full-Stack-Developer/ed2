import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/';
const accessType = process.env.NEXT_PRIVATE_ACCESSTYPE || 'privateapidata';

const axiosFileInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Type": accessType,
    },
});

axiosFileInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosFileInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data?.message || error.message);
        return Promise.reject(error);
    }
);

export default axiosFileInstance; 
