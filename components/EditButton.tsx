"use client";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface EditButonPorps {
  userId?: string;
}

export default function EditButton({ userId }: EditButonPorps) {
  // console.log("consoling from edit button", userId);
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Link href={`/dashboard/admin/user/edit/${userId}`}>
      <Button className="bg-primary text-white text-md">
        <Icon icon="uil:edit" className="text-lg" />
        <span>Edit</span>
      </Button>
    </Link>
  );
}
