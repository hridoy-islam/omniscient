"use client";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardHeader>
            <h2>Add Exchange</h2>
          </CardHeader>
          <CardBody className="border border-t border-stroke bg-primaryLight">
            <input type="text" className="roboinput" />
            <Button className="btn-basic w-5">Save</Button>
          </CardBody>
        </Card>
        <Card className="shadow-xl">
          <CardHeader>
            <h2>Exchange Names</h2>
          </CardHeader>
          <CardBody>
            <table className="table-fixed">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>1</td>
                  <td>Bitfinex</td>
                  <td>
                    <EditButton />
                    <DeleteButton />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Bitfinex</td>
                  <td>
                    <EditButton />
                    <DeleteButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-3 my-10">
        <Card>
          <CardHeader>
            <h2>Add Wallet</h2>
          </CardHeader>
          <CardBody className="border border-t border-stroke bg-primaryLight">
            <input type="text" className="roboinput" />
            <Button className="btn-basic w-5">Save</Button>
          </CardBody>
        </Card>
        <Card className="shadow-xl">
          <CardHeader>
            <h2>Wallet Names</h2>
          </CardHeader>
          <CardBody>
            <table className="table-fixed">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>1</td>
                  <td>Bitfinex</td>
                  <td>
                    <EditButton />
                    <DeleteButton />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Bitfinex</td>
                  <td>
                    <EditButton />
                    <DeleteButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
