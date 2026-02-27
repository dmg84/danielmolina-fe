import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: (import.meta.env.VITE_API_BASE_URL as string) || ''
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error('axios error', error);
        return Promise.reject(error);
    }
);
