"use client";
import { UserDashBalance } from "@/components/UserDashBalance";
import { UserPayoutsTable } from "@/components/UserPayoutsTable";
import UserRigsTable from "@/components/UserRigsTable";
import { WelcomeBanner } from "@/components/WelcomeBanner";

export default function Page() {
  return (
    <div>
      <WelcomeBanner />
      <UserDashBalance />
      <UserRigsTable />
      <UserPayoutsTable />
    </div>
  );
}
