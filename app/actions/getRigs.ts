import Axios from "@/utils/axios";

export default async function getRigs(id: string) {
  try {
    const res = await Axios.get(`/rigs/${id}`);
    return res.data;
  } catch (error) {
    console.log("errors", error);
  }
}
