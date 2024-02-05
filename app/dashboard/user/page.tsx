import getUser from "@/app/actions/getUser";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { DecodedToken } from "../layout";
import Home from "../_components/Home/Home";
import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";
import getWithdrawsUsingCookies from "@/app/actions/getWithdrawsUsingCookies";
import getPayouts from "@/app/actions/getPayouts";
import getSettings from "@/app/actions/getSettings";

const Page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const JWT = token?.value;
  let id;
  if (JWT) {
    const decoded: DecodedToken = jwtDecode(JWT) as DecodedToken;
    id = decoded?._id;
  }

  let currentUser;

  if (id) {
    currentUser = await getUser(id);
  }

  const rigs = await getRigsUsingCookies(pageNumber);
  const withdraws = await getWithdrawsUsingCookies();
  const payouts = await getPayouts(pageNumber);
  const settings = await getSettings();

  return (
    <Home
      settings={settings?.data}
      currentUser={currentUser?.data}
      rigs={rigs?.data?.result}
      withdraws={withdraws?.data?.result}
      payouts={payouts?.data?.result}
    />
  );
};

export default Page;
