import { cookies } from "next/headers"
import axios, { AxiosError, AxiosInstance } from "axios"
import { redirect } from "next/navigation";

const api: AxiosInstance = axios.create({
    baseURL: 'https://tutorapi.nisbot.uz/api/',
});



api.interceptors.request.use(
    (config) => {
        const accessToken = cookies().get('accessToken')?.value
        if (accessToken) {
            if (config.headers) config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        if (error.response?.status == 401) {
            redirect('/login')
        }
        return error.response
    }
);
export { api }