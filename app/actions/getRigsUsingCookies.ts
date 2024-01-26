import Axios from "@/utils/axios";
import { cookies } from "next/headers";

const nextCookie = cookies();
const tokenObject = nextCookie.get("jwt");
const token = tokenObject?.value;import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";

export default async function getRigsUsingCookies() {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  let decoded;
  if (jwt) {
    decoded = jwtDecode(jwt) as DecodedToken;
    // console.log("here is the token", decoded);
  }

  try {
    // const res = await Axios.get(`/rigs?userid=${decoded?.id}`);
    const res = await Axios.get(`/rigs?userid=65a951103ad7c0a00a21ae25`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
