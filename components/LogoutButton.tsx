"use client";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const cookies = new Cookies();
  const router = useRouter();

  const handleLogout = () => {
    cookies.remove("jwt");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000 / 5);
  };

  return (
    <button
      onClick={handleLogout}
      // variant="bordered"
      className="flex items-center gap-2 rounded-md border-2 border-red text-red text-md font-medium py-2 px-4 cursor-pointer"
    >
      <Icon icon="tabler:logout" className="text-xl" />
      Logout
    </button>
  );
}
