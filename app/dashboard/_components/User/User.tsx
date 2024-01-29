"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
} from "@nextui-org/react";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import ViewButton from "@/components/ViewButton";
import { UserData } from "@/utils/interfaces";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Axios from "@/utils/axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
interface ApiResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: UserData[];
}

interface UserProps {
  allUsers: ApiResponse;
}

export default function User({ allUsers }: UserProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const usersList = allUsers?.result;

  const handleOpen = (user: UserData) => {
    setSelectedUserId(user?._id);
    setMessage(user?.message || "");

    onOpen();
  };

  const handleSave = () => {
    if (!message || message === "") {
      toast.error("Messeage is required!");
      return;
    }

    const url = `/users/${selectedUserId}`;

    Axios.patch(
      url,
      { message },
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

  const handleStatus = (user: UserData) => {
    if (isLoading) return;

    setIsLoading(true);

    const token = cookies.get("jwt");

    const url = `/users/${user?._id}`;

    const newStatus = user.status === "approved" ? "pending" : "approved";

    Axios.patch(
      url,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        toast.success(response?.data?.message);
        router.refresh();
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Card>
        <CardHeader className="tableHeader">
          <h2>All User</h2>

          <Link
            className="text-white bg-primary px-4 py-2 rounded-xl"
            href="/dashboard/admin/user/create"
          >
            Add User
          </Link>
        </CardHeader>
        <CardBody>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {usersList?.map((user, id) => (
              <tbody key={id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-2">
                      <Avatar
                        className="w-6 h-6"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <span>
                        {user?.personal_information?.firstName}{" "}
                        {user?.personal_information?.lastName}
                      </span>
                    </div>
                  </td>
                  <td>+987438438</td>
                  <td>{user?.email}</td>
                  <td>
                    <Chip
                      color={
                        user?.status === "pending"
                          ? "warning"
                          : user?.status === "approved"
                          ? "success"
                          : "danger"
                      }
                    >
                      <button
                        disabled={isLoading}
                        onClick={() => {
                          handleStatus(user);
                        }}
                        className="cursor-pointer"
                      >
                        {user?.status}
                      </button>
                    </Chip>
                  </td>
                  <td className="flex">
                    <EditButton userId={user?._id} />
                    <ViewButton userId={user?._id} />
                    <DeleteButton label="users" id={user?._id} />
                    <Button
                      as={Link}
                      href={`/dashboard/admin/user/${user?._id}/rigs`}
                      className="bg-secondary border border-black text-white mx-2"
                    >
                      Rigs
                    </Button>
                    <Button
                      onClick={() => handleOpen(user)}
                      // onPress={onOpen}
                      className="border border-purple text-purple bg-transparent"
                    >
                      Send Message
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Message</ModalHeader>
              <ModalBody>
                {/* <input
                  required
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Write message"
                  className="p-2 border rounded-md focus:border-none"
                /> */}
                <ReactQuill
                  value={message}
                  onChange={setMessage}
                  placeholder="Write message"
                  modules={User.modules}
                  formats={User.formats}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  className="text-[#fff]"
                  onClick={() => handleSave()}
                  onPress={onClose}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// Define Quill modules and formats
User.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
User.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];
