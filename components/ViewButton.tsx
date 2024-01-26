"use client";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface EditButonPorps {
  userId?: string;
}

export default function ViewButton({ userId }: EditButonPorps) {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/");
  // };
  return (
    <Link href={`/dashboard/admin/user/${userId}`}>
      <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
        <Icon icon="solar:eye-linear" className="text-lg" />
        <span>View</span>
      </Button>
    </Link>
  );
}
