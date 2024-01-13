import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import UserSidebar from "@/components/UserSidebar";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  role: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const JWT = token?.value;
  let role;
  if (JWT) {
    const decoded: DecodedToken = jwtDecode(JWT) as DecodedToken;
    // console.log("JWT decode", decoded);
    role = decoded?.role;
  }
  return (
    <section className="flex">
      {role === "admin" ? <Sidebar /> : <UserSidebar />}
      <div className="w-4/5 h-screen">
        <NavBar />
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
}
