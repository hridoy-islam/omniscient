"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import bgImage from "public/login_bg.png";
import Image from "next/image";
import logintriangle from "../public/logintriangle.png";
import roboxfxicon from "../public/robofxicon.png";

type TLogInput = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLogInput>();

  const onSubmit: SubmitHandler<TLogInput> = (data) => console.log(data);

  return (
    <div className="bg-secondary w-screen h-screen">
      <div className="flex h-screen justify-center items-center">
        <div className="grid grid-cols-2 gap-16">
          <div className="justify-center items-center bg-primary p-16">
            <div>
              <Image
                src={logintriangle}
                alt="loginarrow"
                className="w-8 h-8 flex"
              />
              <h2 className="text-white font-semibold text-6xl mb-6">
                Transform your business with digital{" "}
                <span className="text-secondary">branding.</span>
              </h2>
            </div>

            <p className="text-white font-nunito text-sm">
              Enhance operational efficiency with real-time metrics and
              streamlined user management.
            </p>
          </div>
          <div className="bg-white p-8">
            <Image src={roboxfxicon} alt="Robofx" />
            <h1 className="font-semiBold text-3xl">Hey, hello 👋</h1>
            <p className="font-bold text-sm">
              Enter the information of your account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <label htmlFor="">Email</label>
              <input className="w-full" {...register("email")} />
              <label htmlFor="">Password</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                className="w-full"
                {...register("password", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && <span>This field is required</span>}

              <div className="flex my-3">
                <input type="checkbox" className="mr-2" id="remember" />
                <label htmlFor="remember" className="flex-auto">
                  Remember me
                </label>
                <p>Forget Password?</p>
              </div>

              <input
                type="submit"
                value={`login`}
                className="bg-primary text-white w-full font-semiBold text-lg"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
