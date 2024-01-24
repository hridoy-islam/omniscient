import getUser from "@/app/actions/getUser";
import { UserDashBalance } from "@/components/UserDashBalance";
import { UserPayoutsTable } from "@/components/UserPayoutsTable";
import UserRigsTable from "@/components/UserRigsTable";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { DecodedToken } from "../layout";
import Home from "../_components/Home/Home";

const Page = async () => {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const JWT = token?.value;
  let id;
  if (JWT) {
    const decoded: DecodedToken = jwtDecode(JWT) as DecodedToken;
    console.log("JWT decode", decoded);
    id = decoded?.id;
  }

  let currentUser;

  if (id) {
    currentUser = await getUser(id);
  }

  return <Home currentUser={currentUser?.data} />;
};

export default Page;
