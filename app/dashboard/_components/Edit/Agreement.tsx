import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
const Agreement = () => {
  return (
    <Card>
      <CardHeader>
        <h2>Agreement</h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col w-1/2">
          <label htmlFor="">Upload Agreement</label>
          <input type="file" name="" className="roboinput" id="" />
        </div>
      </CardBody>
      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <Button className="btn-basic rounded-md">Save</Button>
        <Button className="bg-white border border-stroke rounded-md shadow-sm">
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Agreement;
