import Sidebar from "@/components/Sidebar";
import UserSidebar from "@/components/UserSidebar";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import getUser from "../actions/getUser";
import AdminNavbar from "@/components/AdminNavbar";
import UserNavbar from "@/components/UserNavbar";
import getSettings from "../actions/getSettings";

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  role: string;
  _id: string;
}

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const JWT = token?.value;
  let role;
  let currentUser;
  if (JWT) {
    const decoded: DecodedToken = jwtDecode(JWT) as DecodedToken;
    role = decoded?.role;
    currentUser = await getUser(decoded?._id);
  }

  const settings = await getSettings();

  return (
    <div className="flex h-screen overflow-hidden">
      {role === "admin" ? (
        <Sidebar currentUser={currentUser?.data} />
      ) : (
        <UserSidebar currentUser={currentUser?.data} />
      )}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {role === "admin" ? (
          <AdminNavbar currentUser={currentUser?.data} />
        ) : (
          <UserNavbar settings={settings?.data} currentUser={currentUser?.data} />
        )}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
