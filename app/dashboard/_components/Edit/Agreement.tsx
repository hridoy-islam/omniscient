"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import ImageUpload from "@/components/ImageUpload";
const Agreement = () => {
  const [agreementFile, setAgreementFile] = useState("");

  return (
    <Card>
      <CardHeader>
        <h2>Agreement</h2>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col">
          <label htmlFor="photo">Upload Photo</label>
          <ImageUpload
            value={agreementFile}
            onChange={(value) => setAgreementFile(value)}
          />
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
