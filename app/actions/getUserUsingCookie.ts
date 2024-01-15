import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getUserUsingCookie() {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  let decoded;
  if (jwt) {
    decoded = jwtDecode(jwt) as DecodedToken;
    // console.log("here is the token", decoded);
  }

  try {
    const res = await Axios.get(`/users/${decoded?.id}`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
