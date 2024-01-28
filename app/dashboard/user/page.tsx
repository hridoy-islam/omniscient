import getUser from "@/app/actions/getUser";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { DecodedToken } from "../layout";
import Home from "../_components/Home/Home";
import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import { getAllWithdrawsById } from "@/app/actions/getAllWithdrawsById";
import getWithdrawsUsingCookies from "@/app/actions/getWithdrawsUsingCookies";
import getPayouts from "@/app/actions/getPayouts";

const Page = async () => {
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

  const rigs = await getRigsUsingCookies();
  const withdraws = await getWithdrawsUsingCookies();
  const payouts = await getPayouts();
  console.log(payouts?.data?.result);

  return (
    <Home
      currentUser={currentUser?.data}
      rigs={rigs?.data?.result}
      withdraws={withdraws?.data?.result}
      payouts={payouts?.data?.result}
    />
  );
};

export default Page;
