"use client";

import { UserDashBalance } from "@/components/UserDashBalance";
import { UserPayoutsTable } from "@/components/UserPayoutsTable";
import UserRigsTable from "@/components/UserRigsTable";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { UserData } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LogoutButton from "@/components/LogoutButton";

interface HomeProps {
  currentUser: UserData;
}

const Home = ({ currentUser }: HomeProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (currentUser?.status === "pending") {
      onOpen();
    }
  }, [currentUser]);
  return (
    <div>
      <WelcomeBanner currentUser={currentUser} />
      <UserDashBalance />
      <UserRigsTable />
      <UserPayoutsTable />
      <Modal
        backdrop="blur"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p className="font-bold text-2xl text-center">
                  {currentUser?.message}{" "}
                </p>
                <div className="flex justify-center">
                  <LogoutButton />
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
