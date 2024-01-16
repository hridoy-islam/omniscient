import Axios from "@/utils/axios";

export default async function getSingleProduct(id: string) {
  try {
    const res = await Axios.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
