import axios, { AxiosInstance } from "axios";

const API_URL = "http://localhost:3001/api";
//const API_URL = "https://api.robofxtrader.com/api";

const Axios: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Enable sending cookies
});

// Axios.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie("jwt");

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Interceptor error", error);
//     return Promise.reject(error);
//   }
// );

export default Axios;
