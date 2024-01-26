import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getUserUsingCookie() {
  const nextCookies = cookies();
  const tokenObject = nextCookies.get("jwt");
  const token = tokenObject?.value;
  let decoded;
  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
    // console.log("here is the token", decoded);
  }

  // console.log("here is the token", token);

  try {
    const res = await Axios.get(`/users/${decoded?._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
