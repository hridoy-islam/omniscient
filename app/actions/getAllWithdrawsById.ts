import Axios from "@/utils/axios";

export default async function getAllWithdrawsById(id: string) {
  try {
    const res = await Axios.get(`/withdraws/${id}`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
