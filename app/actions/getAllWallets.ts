import Axios from "@/utils/axios";

export default async function getAllWallets() {
  try {
    const res = await Axios.get(`/wallet`);
    return res.data;
  } catch (error) {
    console.log("errors", error);
  }
}
