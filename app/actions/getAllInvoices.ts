import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getAllInvoices() {
  try {
    const res = await Axios.get(`/invoices`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
