"use client";
import { Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Contact() {
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
              <p>mining@robofxtrader.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ep:phone" className="text-primary text-lg" />
              <p>+19292301920</p>
            </div>
          </div>
        </div>

        <div className="">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            ></textarea>
            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
              value="Submit"
            />
          </form>
        </div>
      </Card>
    </div>
  );
}
