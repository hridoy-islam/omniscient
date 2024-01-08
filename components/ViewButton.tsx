import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function ViewButton() {
  return (
    <Link href={`/dashboard/admin/user/1`} >
    <Button className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md">
      <Icon icon="solar:eye-linear" className="text-lg" />
      <span>View</span>
    </Button>
    </Link>
  );
}
