import axios from "axios";
import JWTManager from "./jwt"

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

axiosClient.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${JWTManager.getToken()}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

export default axiosClient