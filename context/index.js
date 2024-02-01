"use client";

import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    token: "",
  });


  useEffect(() => {
    const token = cookie.get("jwt");
    setState({ token: token });
  }, []);

  const router = useRouter();

  // Adding token in the config
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = process.env.API_URL; // now I remove baseURl from everywhere and it works
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //now I can remove header section it works

  // Adding axios interceptor request -> when token is expired then the user will force logout
  axios.interceptors.response.use(
    function (response) {
      // if everything is fine then I don't have to do anything
      return response;
    },
    function (error) {
      // Do something with request error
      let res = error.response;
      if (res.status == 401 && req.config && !res.config._isRetryRequest) {
        // 401->unothorised error
        // then lougout user
        setState(null);
        cookie.removeItem("jwt"); // remove the user from localstorage
        router.push("/");
      }
    }
  );
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
