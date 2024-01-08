"use client";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function LogoutButton() {
  return (
    <Button
      variant="bordered"
      className="border-2 border-red text-red text-md font-medium py-1 px-2"
    >
      <Icon icon="tabler:logout" className="text-xl" />
      Logout
    </Button>
  );
}
