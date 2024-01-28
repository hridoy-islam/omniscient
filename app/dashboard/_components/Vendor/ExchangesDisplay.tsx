"use client";
import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import DeleteButton from "@/components/DeleteButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

interface Exchange {
  _id: string;
  name: string;
  __v: number;
}

interface ExchangesDisplayProps {
  exchanges: Exchange[];
}

const ExchangesDisplay: React.FC<ExchangesDisplayProps> = ({ exchanges }) => {
  const cookie = new Cookies();
  const token = cookie.get("jwt");

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updatedName, setUpdatedName] = useState("");
  const [selectedExchange, setSelectedExchange] = useState<Exchange | null>(
    null
  );

  const handleEdit = (exchange: Exchange) => {
    setSelectedExchange(exchange);
    setUpdatedName(exchange.name);
    onOpen();
  };

  const handleUpdate = async () => {
    try {
      if (!selectedExchange) {
        console.error("No exchange selected for update");
        return;
      }

      const apiUrl = `/exchange/${selectedExchange._id}`;
      const response = await axios.patch(
        apiUrl,
        {
          name: updatedName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data?.message);
      router.refresh();
      onOpenChange();
    } catch (error) {
      toast.error("Error updating exchange");
      console.error("Error updating exchange", error);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <h2>Exchange Names</h2>
      </CardHeader>
      <CardBody>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exchanges?.map((exchange, index) => (
              <tr key={exchange._id}>
                <td>{index + 1}</td>
                <td>{exchange.name}</td>
                <td className="flex">
                  <Button
                    onPress={() => handleEdit(exchange)}
                    className="bg-primary text-white text-md"
                  >
                    <Icon icon="uil:edit" className="text-lg" />
                    <span>Edit</span>
                  </Button>
                  <DeleteButton label="exchange" id={exchange?._id} />
                </td>
              </tr>
            ))}
          </tbody>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isDismissable={false}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody>
                    {" "}
                    <label htmlFor="updatedName">Exchange Name</label>
                    <input
                      type="text"
                      id="updatedName"
                      className="roboinput"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      className="text-white"
                      onPress={handleUpdate}
                    >
                      Update
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </table>
      </CardBody>
    </Card>
  );
};

export default ExchangesDisplay;
