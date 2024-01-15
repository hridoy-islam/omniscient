import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import UserSidebar from "@/components/UserSidebar";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import getUser from "../actions/getUser";

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  role: string;
}

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const JWT = token?.value;
  let role;
  let currentUser;
  if (JWT) {
    const decoded: DecodedToken = jwtDecode(JWT) as DecodedToken;
    // console.log("JWT decode", decoded);
    role = decoded?.role;
    currentUser = await getUser(decoded?.id);
  }
  return (
    <section className="flex">
      {role === "admin" ? <Sidebar currentUser={currentUser?.data} /> : <UserSidebar currentUser={currentUser?.data} />}
      <div className="w-4/5 h-screen">
        <NavBar />
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
