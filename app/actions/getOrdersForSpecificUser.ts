import Axios from "@/utils/axios";
import { cookies } from "next/headers";

const nextCookie = cookies();
const tokenObject = nextCookie.get("jwt");
const token = tokenObject?.value;import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";

export default async function getOrdersForSpecificUser() {
  const nextCookies = cookies();
  const tokenData = nextCookies.get("jwt");
  const token = tokenData?.value;

  let decoded;

  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }
  // console.log(decoded);

  try {
    const res = await Axios.get(`/orders/${decoded?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const res = await Axios.get(`/orders`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
