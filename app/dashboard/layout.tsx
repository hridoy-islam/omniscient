import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-3/4 h-screen">
        <NavBar />
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
}
