"use client";

import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
const AddExchange = () => {
  const [exchangeName, setExchangeName] = useState("");
  const router = useRouter();
  const handleSave = () => {
    const apiUrl = "/exchange";

    axios
      .post(apiUrl, { name: exchangeName })
      .then((response) => {
        // console.log("Exchange saved successfully", response.data);
        toast.success(response?.data?.message);
        router.refresh();
        setExchangeName("");
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <Card>
      <CardHeader>
        <h2>Add Exchange</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke bg-primaryLight">
        <input
          type="text"
          className="roboinput"
          value={exchangeName}
          onChange={(e) => setExchangeName(e.target.value)}
        />
        <Button className="btn-basic w-5" onClick={handleSave}>
          Save
        </Button>
      </CardBody>
    </Card>
  );
};

export default AddExchange;
