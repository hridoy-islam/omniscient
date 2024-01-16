import Axios from "@/utils/axios";

export default async function getOrderById(id: string) {
  try {
    const res = await Axios.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
