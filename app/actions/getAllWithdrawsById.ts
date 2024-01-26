
import Axios from "@/utils/axios";


import { cookies } from "next/headers";

export const getAllWithdrawsById = async (id: string) => {
  const cookieStore = cookies();

  const tokenObject = cookieStore.get("jwt");
  const token = tokenObject?.value;

  try {
    const res = await Axios.get(`/withdraws/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
};
