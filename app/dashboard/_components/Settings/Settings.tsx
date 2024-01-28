"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Cookies from "universal-cookie";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import axios from "@/utils/axios";
import toast from "react-hot-toast";

interface SettingsProps {
  settingsData: {
    _id: string;
    usd: number;
    inr: number;
    btc: number;
    euro: number;
    usdt: number;
  }[];
}

const Settings: React.FC<SettingsProps> = ({ settingsData }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;

  const [updatedSettings, setUpdatedSettings] = useState({
    ...settingsData[0],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof updatedSettings
  ) => {
    const parsedValue = parseFloat(e.target.value);
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [key]: isNaN(parsedValue) ? "" : parsedValue,
    }));
  };
  const handleSave = async () => {
    try {
      const apiUrl = `/settings/6593eb10d44ad1c5f006ce48`;
      const response = await axios.patch(apiUrl, updatedSettings, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(response?.data?.message);

      // Update the local state with the changes made
      setUpdatedSettings((prevSettings) => ({
        ...prevSettings,
        ...response.data,
      }));
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("Error saving data", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2>Global Values</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="">BTC</label>
            <input
              type="text"
              name="btc"
              className="roboinput"
              value={updatedSettings.btc}
              onChange={(e) => handleInputChange(e, "btc")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">USD</label>
            <input
              type="text"
              name="usd"
              className="roboinput"
              value={updatedSettings.usd}
              onChange={(e) => handleInputChange(e, "usd")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Euro</label>
            <input
              type="text"
              name="euro"
              className="roboinput"
              value={updatedSettings.euro}
              onChange={(e) => handleInputChange(e, "euro")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">INR</label>
            <input
              type="text"
              name="inr"
              className="roboinput"
              value={updatedSettings.inr}
              onChange={(e) => handleInputChange(e, "inr")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">USDT</label>
            <input
              type="text"
              name="usdt"
              className="roboinput"
              value={updatedSettings.usdt}
              onChange={(e) => handleInputChange(e, "usdt")}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-6">
          <Button className="bg-primary text-white" onClick={handleSave}>
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Settings;
