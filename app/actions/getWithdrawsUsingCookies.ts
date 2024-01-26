import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getWithdrawsUsingCookies() {
  const nextCookies = cookies();
  const tokenObject = nextCookies.get("jwt");
  const token = tokenObject?.value;
  let decoded;
  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }

  try {
    const res = await Axios.get(`/withdraws?userid=${decoded?._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
