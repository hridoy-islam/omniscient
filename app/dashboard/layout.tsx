import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import UserSidebar from "@/components/UserSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      {/* 
      if admin it works*/}
      <Sidebar />

      {/* sidebar for user
      <UserSidebar />*/}
      <div className="w-4/5 h-screen">
        <NavBar />
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
}
