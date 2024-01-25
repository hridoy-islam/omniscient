import Axios from "@/utils/axios";

const nextCookie = cookies();
const tokenObject = nextCookie.get("jwt");
const token = tokenObject?.value;import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getInvoiceById() {
  const nextCookies = cookies();
  const tokenData = nextCookies.get("jwt");
  const token = tokenData?.value;

  let decoded;

  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }

  // console.log(decoded)

  try {
    const res = await Axios.get(`/invoices?userid=${decoded?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
