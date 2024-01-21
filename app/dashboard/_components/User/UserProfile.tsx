"use client";
import React from "react";
import { Avatar, Button, Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { UserData } from "@/utils/interfaces";
import EditButton from "@/components/EditButton";

interface UserProfileProps {
  user: UserData;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  // console.log("User data:", user);

  // const { firstName, lastName, email, phone } = user?.personal_information;
  // const { address, city, country, state, zipcode } = user?.contact_information;
  //   const { address, city, country, state, zipcode } = user?.billing_information;

  return (
    <div>
      <Card className="flex flex-row gap-4 p-6">
        <div>
          <Avatar
            className="w-20 h-20"
            radius="sm"
            src={user?.personal_information?.photo}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl md:text-3xl font-semibold">{`${user?.personal_information?.firstName} ${user?.personal_information?.lastName}`}</h1>
            <Link
              href={`/dashboard/admin/user/edit/${user?._id}`}
              className="flex items-center gap-1 text-primary"
            >
              <Icon icon="basil:edit-outline" />
              <span>Edit</span>
            </Link>
          </div>
          <p className="flex flex-row items-center">
            <Icon icon="ic:outline-email" className="mr-2" />
            <span>Email: {user?.personal_information?.email}</span>
          </p>
          <div className="flex flex-row items-center">
            <Icon icon="tdesign:location" className="mr-2" />{" "}
            <p>
              {user?.contact_information?.address},{" "}
              {user?.contact_information?.city},{" "}
              {user?.contact_information?.country}
            </p>
          </div>
          <Button className="border border-primary bg-transparent text-primary w-64 flex items-center mt-3">
            <Icon icon="material-symbols-light:download" width={26} />
            Download Agreenment
          </Button>
        </div>
      </Card>
      <Card className="p-6 my-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold">Basic Informaion</h2>
          <Link
            href={`/dashboard/admin/user/edit/${user?._id}`}
            className="flex items-center gap-1 text-primary"
          >
            <Icon icon="basil:edit-outline" />
            <span>Edit</span>
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Name</h2>{" "}
            <p>
              {user?.personal_information?.firstName}{" "}
              {user?.personal_information?.lastName}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Profession</h2> <p></p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Location</h2>{" "}
            <p>{user?.contact_information?.address}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Phone</h2>{" "}
            <p>{user?.personal_information?.phone}</p>
          </div>
        </div>
      </Card>
      <Card className="p-6 my-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold">Contact Informaion</h2>
          <Link
            href={`/dashboard/admin/user/edit/${user?._id}`}
            className="flex items-center gap-1 text-primary"
          >
            <Icon icon="basil:edit-outline" />
            <span>Edit</span>
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Address</h2>{" "}
            <p>{user?.contact_information?.address}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">City</h2>{" "}
            <p>{user?.contact_information?.city}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Country</h2>{" "}
            <p>{user?.contact_information?.country}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Zip Code</h2>{" "}
            <p>{user?.contact_information?.zipcode}</p>
          </div>
        </div>
      </Card>
      <Card className="p-6 my-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold">Billing Informaion</h2>
          <Link
            href={`/dashboard/admin/user/edit/${user?._id}`}
            className="flex items-center gap-1 text-primary"
          >
            <Icon icon="basil:edit-outline" />
            <span>Edit</span>
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Address</h2>{" "}
            <p>{user?.billing_information?.address}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">City</h2>{" "}
            <p>{user?.billing_information?.city}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Country</h2>{" "}
            <p>{user?.billing_information?.country}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <h2 className="text-primary">Zip Code</h2>{" "}
            <p>{user?.billing_information?.zipcode}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
