"use client";
import Image from "next/image";
import group34 from "../../public/Group3466.png";
import group2 from "../../public/Group3465.png";
import group3 from "../../public/Group3467.png";
import { Icon } from "@iconify/react";

export default function AppView() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 container mx-auto py-24">
        <div className="space-y-4">
          <h2 className="text-primary">Hardware</h2>
          <h3 className="font-bold text-3xl">
            Powerful Performance with TI-Miner Top GPU
          </h3>
          <p>
            Unleash unparalleled mining prowess with the TI-Miner Top GPU
            featuring Radeon RX 470. Elevate your performance, maximize your
            returns
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>6 months of free allocation in data center</span>
            </li>

            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>12 months of warranty service</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>24 months of 24/7 technical support</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>6 months without no expenses on electricity</span>
            </li>
          </ul>
        </div>
        <div>
          <Image src={group34} alt="hardware" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 container mx-auto py-24">
        <div>
          <Image src={group2} alt="hardware" />
        </div>
        <div className="space-y-4">
          <h2 className="text-primary">Hardware</h2>
          <h3 className="font-bold text-3xl">
            Start Mining with three Simple Steps
          </h3>
          <p>
            Just three simple steps stand between you and unparalleled success.
            Start mining seamlessly today - simplicity meets efficiency.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Register Account</span>
            </li>

            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Select Setup Options Home/Office/Virtual</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>24 months of 24/7 technical support</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Receive Currency</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 container mx-auto py-24">
        <div className="space-y-4">
          <h2 className="text-primary">Mining Technologies</h2>
          <h3 className="font-bold text-3xl">
            TechMine: Innovating Mining Solutions
          </h3>
          <p>
            Dive into the future of mining with our state-of-the-art,
            multi-algorithm, multi-coin cloud mining service. We've harnessed
            cutting-edge technology to redefine the mining experience – making
            it simple, smart, and incredibly profitable for everyone. Your
            journey to mining success starts here! 💰✨
          </p>
        </div>
        <div>
          <Image src={group3} alt="hardware" />
        </div>
      </div>
    </div>
  );
}
