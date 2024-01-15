"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/utils/interfaces";
import axios from "@/utils/axios";
import toast from "react-hot-toast";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  photo: string | null;
  phone: string;
}

const PersonalInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    phone: "",
  });

  const cookie = new Cookies();
  const token = cookie.get("jwt");
  const decoded: DecodedToken = jwtDecode(token) as DecodedToken;
  //   console.log("token", decoded);

  useEffect(() => {
    axios
      .get(`/users/${decoded?.id}`)
      .then((response) => {
        // console.log("response", response?.data?.data);
        if (response?.data?.data?.personal_information) {
          setUserData(response?.data?.data?.personal_information);
        }
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleSave = () => {
    const userId = decoded?.id;
    if (!userId) {
      console.error("User ID not available");
      return;
    }

    const formattedData = {
      personal_information: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
      },
    };

    const url = `/users/${userId}`;

    axios
      .patch(url, formattedData)
      .then((response) => {
        toast.success(response?.data?.message);
        // console.log("Data saved successfully", response.data);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        // console.error("Error saving data", error);
      });
  };

  const handleClear = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      photo: null,
      phone: "",
    });
  };

  const handleChange = (key: keyof UserData, value: string | null) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value || "", // Set to an empty string if value is null or undefined
    }));
  };

  return (
    <Card>
      <CardHeader>
        <h2>Profile Information</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="roboinput"
                  id="firstName"
                  value={userData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="roboinput"
                  id="lastName"
                  value={userData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="roboinput"
                id="email"
                value={userData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="photo">Upload Photo</label>
              <input
                type="file"
                name="photo"
                className="roboinput"
                id="photo"
                value={userData.photo || ""}
                onChange={(e) => handleChange("photo", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="roboinput"
                id="phone"
                value={userData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="w-full flex flex-row-reverse gap-3">
        <Button className="btn-basic rounded-md" onClick={handleSave}>
          Save
        </Button>
        <Button
          className="bg-white border border-stroke rounded-md shadow-sm"
          onClick={handleClear}
        >
          Clear
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PersonalInfo;
