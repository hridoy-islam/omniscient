import Axios from "@/utils/axios";

export default async function getAllProducts() {
  try {
    const res = await Axios.get(`/products?isDeleted=false`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
