"use client";

import axios, { AxiosInstance } from "axios";
import Cookies from "universal-cookie";
// import { cookies } from "next/headers";
// const API_URL = process.env.NEXT_PUBLIC_API;
// const API_URL = "http://217.196.50.52:5000/api";
const API_URL = "http://localhost:3001/api";
// const cookie = new Cookies();
// const token = cookie.get("jwt");
// console.log("here is the token", token);

const Axios: AxiosInstance = axios.create({
  baseURL: API_URL,
});

// Axios.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default Axios;
