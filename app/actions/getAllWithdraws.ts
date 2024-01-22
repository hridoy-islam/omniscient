import Axios from "@/utils/axios";

export default async function getAllWithdraws() {
  try {
    const res = await Axios.get(`/withdraws`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
