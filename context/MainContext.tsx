"use client";
import { ReactNode, createContext, useState } from "react";

import { useEffect } from "react";
export const userContext = createContext({});

const MainContext = ({ children }: { children: ReactNode }) => {
  // const [tokenDetails, setTokenDetails] = useState(JSON.parse.localStorage?.getItem('details'));

  const [tokenDetails, setTokenDetails] = useState({});
  const [token, setToken] = useState();
  //   useEffect(() => {
  //     if (typeof window !== "undefined" && window.localStorage) {
  //       let tokenDetails = JSON.parse(localStorage.getItem("details"));

  //       setTokenDetails(tokenDetails);
  //     }
  //   }, []);

  //   //  const [token, setToken] = localStorage.getItem('timertoken');
  //   useEffect(() => {
  //     if (typeof window !== "undefined" && window.localStorage) {
  //       let token = localStorage.getItem("timertoken");

  //       setToken(token);
  //     }
  //   }, []);

  const info = {
    tokenDetails,
    setTokenDetails,
    token,
    setToken,
  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default MainContext;
