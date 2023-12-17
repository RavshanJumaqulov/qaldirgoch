import { cookies } from "next/headers"
import axios, { AxiosError, AxiosInstance } from "axios"
import { useRefreshToken } from "./useRefreshToken";
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
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {        
        const prevRequest = error.config
        if (error.response.status == 401 && !prevRequest.send) {
            
            redirect('/login')
            // prevRequest.send = true;
            // await useRefreshToken()
            // prevRequest.headers[
            //     "Authorization"
            // ] = `Bearer ${cookies().get('accessToken')}`;
            // return api(prevRequest);
        }
        return error.response
    }
);
export { api }