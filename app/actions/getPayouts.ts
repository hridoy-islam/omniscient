import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getPayouts() {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  let decoded;
  if (jwt) {
    decoded = jwtDecode(jwt) as DecodedToken;
  }

  // console.log(jwt);
  // console.log(decoded);

  try {
    const res = await Axios.get(`/payout?userid=${decoded?._id}&limit=10`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
