import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
export default function DeleteButton() {
  return (
    <Button className="text-red border-red border-1 bg-white ml-2 px-3 text-md">
      <Icon icon="system-uicons:trash" className="text-lg" />
      <span>Delete</span>
    </Button>
  );
}
