import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AboutHeader() {
  return (
    <div className="bg-white">
      <div className="py-20 container mx-auto text-center space-y-4">
        <h3 className="text-textLight">ABOUT US</h3>
        <h2 className="text-4xl text-primary">
          Crafting Success: Unveiling Our Story
        </h2>
        <p>
          It’s super simple - Your mining rigs are already set up and running.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div></div>
          <div className="flex flex-row items-center mx-14">
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
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
