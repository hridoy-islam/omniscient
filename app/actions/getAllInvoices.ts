import Axios from "@/utils/axios";
import { cookies } from "next/headers";

export default async function getAllInvoices(pageNumber: Number) {
  const nextCookie = cookies();
  const tokenObject = nextCookie.get("jwt");
  const token = tokenObject?.value;
  try {
    const res = await Axios.get(`/invoices?page=${pageNumber}&limit=50`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
