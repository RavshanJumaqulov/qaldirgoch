import { cookies } from "next/headers";
import axios, { AxiosInstance } from "axios";

const refreshAxios = axios.create({
  baseURL: 'https://tutorapi.nisbot.uz/api/',
});

refreshAxios.interceptors.request.use(
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
refreshAxios.interceptors.response.use(
  (response) => {
    console.log('++++++++++++++++++++++++++++++++++++++++Response++++++++++++++++++++++++++++++++');
    return response;
  },
  async (error) => {
    console.log(error.response.status);
    if (error.response.status == 401) {
      return 'Unautentification'
    }
  }
);

export const useRefreshToken = async () => {
  const refresh = cookies().get('refreshToken')?.value
  const refreshToken = async () => {
    const response: AxiosInstance = await refreshAxios({
      method: "post",
      url: "/token/refresh/",
      data: { refresh: refresh },
    });
    return response
  }
  return refreshToken();
};
