import Axios from "@/utils/axios";
import { cookies } from "next/headers";

export default async function getAllUsersAdmin() {
  const nextCookie = cookies();
  const tokenObject = nextCookie.get("jwt");
  const token = tokenObject?.value;

  try {
    const res = await Axios.get("/users", {
      params: {
        role: "user",
        isDeleted: false,
        limit: 10000,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
