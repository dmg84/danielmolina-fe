import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export const createAxiosInstance = (baseURL: string, withCredentials = true): AxiosInstance => {
    return axios.create({
        baseURL,
        withCredentials
    });
};

export const axiosHandlingError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

export const axiosInstance = createAxiosInstance('');
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => axiosHandlingError(error)
);
