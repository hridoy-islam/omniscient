"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import logintriangle from "../public/logintriangle.png";
import roboxfxicon from "../public/robofxicon.png";
import Link from "next/link";

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
    <div className="bg-[url('../public/login_bg.png')]">
      <div className="grid grid-cols-2 gap-16">
        {/* left side */}
        <div className="py-8 px-16 ml-20 flex flex-col justify-center">
          <div className="bg-primary px-16 py-10 shadow-2xl">
            <div className="flex">
              <Image
                src={logintriangle}
                alt="loginarrow"
                className="w-8 h-8 mt-3 mr-2 space-x-2"
              />
              <h2 className="text-white font-semibold text-6xl">Transform</h2>
            </div>
            <h2 className="text-white font-semibold text-6xl mb-6">
              your business <br /> with digital{" "}
              <span className="text-secondary">branding.</span>
            </h2>

            <p className="text-white my-5 font-nunito text-lg font-light">
              Enhance operational efficiency with real-time metrics and
              streamlined user management.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="bg-white py-8 px-20 h-screen flex flex-col justify-center">
          <Image src={roboxfxicon} alt="Robofx" className="mb-3" />
          <h1 className="font-semiBold text-3xl my-2">Hey, hello 👋</h1>
          <p className="font-bold text-sm text-textlight mb-5">
            Enter the information of your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label htmlFor="">Email</label>
              <input
                className="w-full border border-stroke rounded-lg h-12 px-2 bg-[#F1F5F9] focus:border-primary focus:ring-0 focus:outline-none"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                className="w-full border border-stroke rounded-lg h-12 px-2 bg-[#F1F5F9] focus:border-primary focus:ring-0 focus:outline-none"
                {...register("password", { required: true })}
              />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}

            <div className="flex my-3 items-center">
              <input
                type="checkbox"
                className="mr-2 accent-primary"
                id="remember"
              />
              <label htmlFor="remember" className="flex-auto">
                Remember me
              </label>
              <Link href={"/"} className="text-primary">
                Forget Password?
              </Link>
            </div>

            <input
              type="submit"
              value={`login`}
              className="bg-primary text-white w-full font-semiBold text-lg h-12 rounded-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
