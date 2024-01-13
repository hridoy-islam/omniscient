import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return <div>
    <div className="w-9/12">
      <h2 className="my-4">Order Details</h2>
      <Card>
        <CardBody>
          
            <h2>Order ID : 17187181</h2> 
            <h2>Date : 81817691</h2> 
            <h2>Status : Paid</h2> 
        </CardBody>
      </Card>
    </div>
    <div className="w-3/12"></div>
  </div>;
}
