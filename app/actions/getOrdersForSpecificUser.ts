import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getOrdersForSpecificUser(pageNumber: Number) {
  const nextCookies = cookies();
  const tokenData = nextCookies.get("jwt");
  const token = tokenData?.value;

  let decoded;

  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }

  try {
    const res = await Axios.get(`/orders`, {
      params: { userid: decoded?._id, page: pageNumber, limit: 50 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
