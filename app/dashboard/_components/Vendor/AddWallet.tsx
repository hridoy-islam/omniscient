"use client";

import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
const AddWallet = () => {
  const [walletName, setWalletName] = useState("");
  const router = useRouter();
  const handleSave = async () => {
    try {
      const apiUrl = "/wallet";
      const response = await axios.post(apiUrl, { name: walletName });

      toast.success(response?.data?.message);
      router.refresh();
      setWalletName("");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error saving wallet", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2>Add Wallet</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke bg-primaryLight">
        <input
          type="text"
          className="roboinput"
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
        />
        <Button className="btn-basic w-5" onClick={handleSave}>
          Save
        </Button>
      </CardBody>
    </Card>
  );
};

export default AddWallet;
