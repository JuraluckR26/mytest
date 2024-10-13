import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        // Ensure headers are properly typed and initialized
        if (!config.headers) {
          config.headers = {} as AxiosRequestHeaders;
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const token = response.data?.data?.token;
    if (token) {
      localStorage.setItem("authToken", token);
    }
    return response;
  },
  (error) => {
   // window.location.href = "/login";
    return Promise.reject(error);
  }
);

export default httpClient;
