"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import logintriangle from "../public/logintriangle.png";
import roboxfxicon from "../public/robofxicon.png";
import Link from "next/link";
import { useContext } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
const jwt = require("jsonwebtoken");

type TLogInput = {
  email: string;
  password: string;
};

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  role: string;
}

export default function Home() {
  // const { tokenDetails, token, setToken, setTokenDetails } =
  //   useContext(userContext);
  // const tokenDecoded = jwt.decode(token);
  // const role = tokenDecoded?.data?.role;
  const cookies = new Cookies();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInput>();

  ("use server");
  const onSubmit = async (data: TLogInput) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    // console.log(response);
  };

  return (
    <div className="bg-[url('../public/login_bg.png')]">
      {/* <div className="grid grid-cols-2 gap-16"> */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-16">
        {/* left side */}
        <div className="md:w-[55%] py-8 md:px-16 md:ml-20 px-4 flex flex-col justify-center">
          <div className="bg-primary px-16 py-10 shadow-2xl">
            <div className="flex">
              <Image
                src={logintriangle}
                alt="loginarrow"
                className="w-8 h-8 mt-3 mr-2 space-x-2"
              />
              <h2 className="text-white font-semibold text-4xl">Transform</h2>
            </div>
            <h2 className="text-white font-semibold text-4xl mb-6">
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
        <div className="w-full md:w-[45%] bg-white py-8 px-4 md:px-20 md:h-screen flex flex-col justify-center">
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
                type="email"
                className="w-full border border-stroke rounded-lg h-12 px-2 bg-[#F1F5F9] focus:border-primary focus:ring-0 focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="password"
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
              className="bg-primary text-white w-full font-semiBold text-lg h-12 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
