import { Button, Card, Chip } from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="p-4">
        <div className="flex gap-4">
          <Chip className="bg-primaryLight text-primary">Default</Chip>
          <h2>$500</h2>
        </div>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Card>
    </div>
  );
}
