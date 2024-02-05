import Axios from "@/utils/axios";
import { cookies } from "next/headers";

export default async function getAllWithdraws(pageNumber: Number) {
  const nextCookie = cookies();
  const tokenObject = nextCookie.get("jwt");
  const token = tokenObject?.value;

  try {
    const res = await Axios.get(`/withdraws?page=${pageNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
