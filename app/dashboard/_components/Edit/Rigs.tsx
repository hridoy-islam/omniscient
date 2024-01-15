import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import DeleteButton from "@/components/DeleteButton";
const Rigs = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <h2>Assign Rigs</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-2 items-center">
            <div>
              <div className="flex flex-col">
                <label htmlFor="">Rig Name</label>
                <input type="text" name="" className="roboinput" id="" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Actual Mining Proficiency</label>
                <input type="text" name="" className="roboinput" id="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label htmlFor="">GPU</label>
                <input type="text" name="" className="roboinput" id="" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Proficiency Value</label>
                <input type="text" name="" className="roboinput" id="" />
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="w-full flex flex-row-reverse gap-3">
          <Button className="btn-basic rounded-md">Save</Button>
          <Button className="bg-white border border-stroke rounded-md shadow-sm">
            Clear
          </Button>
        </CardFooter>
      </Card>

      <Card className="my-6">
        <CardHeader className="tableHeader">
          <h2>Assigned Rigs</h2>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Rig ID</th>
                <th>GPU</th>
                <th>Efficiency</th>
                <th>Power</th>
                <th>Temp</th>
                <th>Load</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                  <Chip color="warning">Warning</Chip>
                </td>
                <td>
                  <EditButton />
                  <ViewButton />
                  <DeleteButton />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default Rigs;
