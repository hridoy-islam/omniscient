import Axios from "@/utils/axios";

export default async function getAllUsers() {
  try {
    const res = await Axios.get(`/users`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}
