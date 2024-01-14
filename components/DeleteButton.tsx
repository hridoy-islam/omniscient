"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import axios from "@/utils/axios";

interface DeleteButtonWithConfirmationProps {
  id?: string;
  label?: string;
}

const DeleteButton: React.FC<DeleteButtonWithConfirmationProps> = ({
  id,
  label,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const apiUrl = `/${label}/${id}`;
      const response = await axios.delete(apiUrl);
      toast.success(response?.data?.message);
      router.refresh();
      onOpenChange();
    } catch (error) {
      toast.error("Something went wrong!");
      // console.error("Error deleting exchange", error);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-red border-red border-1 bg-white ml-2 px-3 text-md"
      >
        <Icon icon="system-uicons:trash" className="text-lg" />{" "}
        <span>Delete</span>
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p></p>
              </ModalHeader>
              <ModalBody>
                <h3>Are you sure you want to delete this exchange?</h3>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  className="text-white"
                  onClick={handleDelete}
                  // onPress={onClose}
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteButton;
