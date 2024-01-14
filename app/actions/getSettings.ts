import Axios from "@/utils/axios";

export default async function getSettings() {
  try {
    const res = await Axios.get(`/settings`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
