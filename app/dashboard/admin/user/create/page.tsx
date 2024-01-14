"use client";

import Axios from "@/utils/axios";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

export default function Page() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const response = await Axios.post("/auth/create-user", data)
      .then((res) => {
        // console.log("API response:", res.data);
        toast.success(res?.data?.message);
        reset();
      })
      .catch((err) => {
        // console.log("the err", err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <Card>
      <CardHeader>
        <h2>Add New User</h2>
      </CardHeader>
      <CardBody className="border border-t border-stroke">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="roboinput"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="roboinput"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse mt-6">
            <Button
              type="submit"
              className="bg-primary text-white cursor-pointer"
            >
              Create
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
