import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getPayouts(pageNumber: Number) {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  let decoded;
  if (jwt) {
    decoded = jwtDecode(jwt) as DecodedToken;
  }

  try {
    const res = await Axios.get(`/payout`, {
      params: {
        userid: decoded?._id,
        page: pageNumber,
      },
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
