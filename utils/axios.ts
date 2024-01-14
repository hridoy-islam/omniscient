import axios, { AxiosInstance } from "axios";
// import cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API;

const Axios: AxiosInstance = axios.create({
  baseURL: API_URL,
  // timeout: 1000,
});

// Add an interceptor to include the authorization token in the headers
// Axios.interceptors.request.use(
//   (config) => {
//     const token = cookie.get("jwt");
//     console.log("token", token);

//     // If a token is available, add it to the headers
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//       // config.headers.Authorization = `Bearer ${JWT}`;
//     }

//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

export default Axios;
