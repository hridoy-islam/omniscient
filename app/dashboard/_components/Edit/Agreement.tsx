"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import ImageUpload from "@/components/ImageUpload";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";

interface AgreementProps {
  id: string;
}

const Agreement = ({ id }: AgreementProps) => {
  const [agreementFile, setAgreementFile] = useState("");
  // console.log("here is the agreement", agreementFile);

  useEffect(() => {
    Axios.get(`/users/${id}`)
      .then((response) => {
        // console.log("response", response?.data?.data);
        if (response?.data?.data?.agreement) {
          setAgreementFile(response?.data?.data?.agreement);
        }
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleSave = () => {
    // const userId = decoded?.id;
    if (!id) {
      console.error("User ID not available");
      return;
    }

    const url = `/users/${id}`;

    Axios.patch(url, {
      agreement: agreementFile,
    })
      .then((response) => {
        toast.success(response?.data?.message);
        // console.log("Data saved successfully", response.data);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // console.error("Error saving data", error);
      });
  };

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
        <Button onClick={handleSave} className="btn-basic rounded-md">
          Save
        </Button>
        <Button className="bg-white border border-stroke rounded-md shadow-sm">
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Agreement;
