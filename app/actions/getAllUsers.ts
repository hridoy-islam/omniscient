import Axios from "@/utils/axios";
import { cookies } from "next/headers";

const nextCookie = cookies();
const tokenObject = nextCookie.get("jwt");
const token = tokenObject?.value;

export default async function getAllUsers() {
  try {
    const res = await Axios.get("/users?role=user&isDeleted=false", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
