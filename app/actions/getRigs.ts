import Axios from "@/utils/axios";
import { cookies } from "next/headers";


export default async function getRigs(id: string) {
  const nextCookie = cookies();
const tokenObject = nextCookie.get("jwt");
const token = tokenObject?.value;
  try {
    const res = await Axios.get(`/rigs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("errors", error);
  }
}
