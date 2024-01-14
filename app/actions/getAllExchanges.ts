import Axios from "@/utils/axios";

export default async function getAllExchanges() {
  try {
    const res = await Axios.get(`/exchange`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
