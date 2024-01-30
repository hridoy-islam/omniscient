"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/banner.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import arrow from "../../public/arrow-ai.png";

export default function Banner() {
  return (
    <div className="md:flex justify-between container mx-auto pb-28">
      <div className="mt-6">
        <h2 className="md:pt-16 md:pb-6 text-6xl font-bold text-primary md:leading-[76px]">
          Your Crypto <br /> Mining <br /> Starts Here
        </h2>
        <h3 className="text-lg font-medium text-darkText pb-6">
          It’s super simple - Your mining rigs are already set up and running.
        </h3>
        <div className="flex flex-row items-center">
          <Button
            as={Link}
            className="text-white bg-primary rounded-full text-[16px] font-semibold py-[14px] px-[22px]"
            href="#"
            variant="flat"
          >
            Start Mining{" "}
            <Icon
              icon="material-symbols-light:arrow-circle-right-outline-rounded"
              width={26}
            />
          </Button>
          <Link
            className="text-lightText bg-none text-[16px] font-semibold py-[12px] px-[24px]"
            href="#"
          >
            Contact Us
          </Link>
          <Image src={arrow} alt="arrow" />
        </div>

        <ul className="flex justify-between md:my-5 sm:my-2">
          <li className="flex gap-2">
            <Icon
              icon="lets-icons:check-fill"
              className="text-primary"
              width={20}
            />
            <p>Global Mining Leader</p>
          </li>
          <li className="flex gap-2">
            <Icon
              icon="lets-icons:check-fill"
              className="text-primary"
              width={20}
            />
            <p>Turnkey Solutions</p>
          </li>
          <li className="flex gap-2">
            <Icon
              icon="lets-icons:check-fill"
              className="text-primary"
              width={20}
            />
            <p>Global Mining Leader</p>
          </li>
        </ul>
      </div>
      <div>
        <Image className="pt-4" src={banner} alt="banner" />
      </div>
    </div>
  );
}
