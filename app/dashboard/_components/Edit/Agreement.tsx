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
import Cookies from "universal-cookie";

interface AgreementProps {
  id: string;
}

const Agreement = ({ id }: AgreementProps) => {
  const [agreementFile, setAgreementFile] = useState("");

  const cookies = new Cookies();
  const token = cookies.get("jwt");

  useEffect(() => {
    Axios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
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

    Axios.patch(
      url,
      {
        agreement: agreementFile,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
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
