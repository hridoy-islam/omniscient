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
      router.refresh();
    }, 1000 / 10);
    setTimeout(() => {
      router.push("/");
    }, 1000 / 5);
  };
  return (
    <Button
      onClick={handleLogout}
      variant="bordered"
      className="border-2 border-red text-red text-md font-medium py-1 px-2 cursor-pointer"
    >
      <Icon icon="tabler:logout" className="text-xl" />
      Logout
    </Button>
  );
}
