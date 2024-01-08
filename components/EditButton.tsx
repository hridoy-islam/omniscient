import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function EditButton() {
  return (
    <Link href={'/dashboard/admin/user/edit/1'}>
    <Button className="bg-primary text-white text-md">
      <Icon icon="uil:edit" className="text-lg" />
      <span>Edit</span>
    </Button>
    </Link>
  );
}
