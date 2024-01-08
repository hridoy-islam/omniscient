import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <h2>Global Values</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="">BTC</label>
            <input type="text" name="" className="roboinput" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Usd</label>
            <input type="text" name="" className="roboinput" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Euro</label>
            <input type="text" name="" className="roboinput" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Inr</label>
            <input type="text" name="" className="roboinput" id="" />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-6">
          <Button className="bg-primary text-white">Save</Button>
        </div>
      </CardBody>
    </Card>
  );
}
