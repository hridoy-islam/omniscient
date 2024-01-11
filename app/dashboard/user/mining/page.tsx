import { Card } from "@nextui-org/react";

export default function page() {
  return (
    <div className="grid grid-cols-3 gap-3 my-6">
      <Card className="p-6">
        <h2>Active</h2>
        <p>
          13 <span>Rigs</span>
        </p>
      </Card>
      <Card className="p-6">
        <h2>Current Mining Balance</h2>
      </Card>
      <Card className="p-6">
        <h2>Power Consumed</h2>
      </Card>
    </div>
  );
}
