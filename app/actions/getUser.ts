import Axios from "@/utils/axios";
import { cookies } from "next/headers";

export default async function getUser(id: string) {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  // console.log("id", id);

  try {
    const res = await Axios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
