import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getAllOrders() {
  try {
    const res = await Axios.get(`/orders`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
