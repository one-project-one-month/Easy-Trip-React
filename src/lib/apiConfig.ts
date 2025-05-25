import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import AppConfig from "@/config/AppConfig";
import useAuthStore, {
  getAccessToken,
  getRefreshToken,
} from "@/store/authStore";

interface AuthRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const { setAccessToken, logout } = useAuthStore.getState();

API.interceptors.request.use(
  config => {
    const token = getAccessToken();

    if (token?.trim().length) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

API.interceptors.response.use(
  response => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as AuthRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken()?.trim();
      console.log("refreshToken", refreshToken);
      if (!refreshToken) {
        logout();

        return Promise.reject(error);
      }

      try {
        const { data: refreshData } = await API.post("/auth/refresh", {
          refreshToken,
        });

        const newAccessToken = refreshData.accessToken;
        setAccessToken(newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
        return API(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
