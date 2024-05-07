"use client";
import { Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }, [formState]);
  return (
    <div className="bg-primaryLight p-14">
      <Card className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-10 py-16 container mx-auto">
        <div className="space-y-8 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-normal">Have Questions?</h2>
            <h2 className="text-4xl font-normal">
              Get in <span className="font-bold">Touch!</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Icon icon="carbon:map" className="text-primary text-lg" />
              <p>13thStreet, 47 W 13th St, New York, NY 10011, USA</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>support@robofxtrader.com</p>
            </div>

            {/* <div className="flex gap-2 items-center">
              <Icon icon="ep:phone" className="text-primary text-lg" />
              <p>+19292301920</p>
            </div> */}
          </div>
        </div>

        <div className="">
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("name", { required: true })}
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              {...register("phone", { required: true })}
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              {...register("email", { required: true })}
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <textarea
              {...register("message", { required: true })}
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            ></textarea>
            {errors.message && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
              value="Submit"
            />
          </form>
          {formState.isSubmitSuccessful ? "Thank you for contacting us" : ""}
        </div>
      </Card>
    </div>
  );
}
