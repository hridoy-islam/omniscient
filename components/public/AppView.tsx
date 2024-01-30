"use client";
import Image from "next/image";
import group34 from "../../public/Group3466.png";
import group2 from "../../public/Group3465.png";
import group3 from "../../public/Group3467.png";
import { Icon } from "@iconify/react";

export default function AppView() {
  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 container mx-auto py-24 items-center">
        <div className="space-y-4">
          <h2 className="text-primary">Hardware</h2>
          <h3 className="font-bold text-3xl">
            Maximizing Mining with TI-Miner Top GPU
          </h3>
          <p>
            The TI-Miner Top GPU, featuring the Nvidia RTX TI Series, is a
            beacon of mining power. Designed for both seasoned miners and
            novices, it provides an unparalleled mining experience. This section
            delves into the advantages and offerings of the TI-Miner Top GPU,
            showcasing how it can transform your mining ventures.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Advanced GPU Technology</span>
            </li>
            <li>
              <p>
                The NVIDIA RTX at the heart of the TI-Miner Top GPU delivers
                exceptional processing power, ensuring efficient and effective
                mining operations. Its architecture is optimized for the complex
                calculations involved in cryptocurrency mining, allowing for
                faster and more profitable mining sessions.
              </p>
            </li>

            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Enhanced Energy Efficiency</span>
            </li>
            <li>
              <p>
                Balancing power with sustainability, the TI-Miner Top GPU is
                engineered for energy efficiency. This means lower electricity
                costs and a smaller carbon footprint, making your mining
                operation both eco-friendly and cost-effective.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Robust Build Quality</span>
            </li>
            <li>
              <p>
                Durability is key in mining hardware, and the TI-Miner Top GPU
                is built to last. With high-quality components and a sturdy
                construction, it's designed to withstand the rigors of
                continuous mining operations.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Plug-and-Play Setup</span>
            </li>
            <li>
              <p>
                Ease of use is a priority. The TI-Miner Top GPU comes with a
                user-friendly setup process, making it easy for anyone to start
                mining quickly, regardless of their technical expertise.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Image src={group34} alt="hardware" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 container mx-auto py-24 items-center">
        <div>
          <Image src={group2} alt="hardware" />
        </div>
        <div className="space-y-4">
          <h2 className="text-primary">Hardware</h2>
          <h3 className="font-bold text-3xl">
            Begin Your Mining Journey in Three Easy Steps
          </h3>
          <p>
            Embark on a path to exceptional mining success with just three
            straightforward steps. Dive into the world of seamless mining today,
            where simplicity harmoniously blends with efficiency.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Create Your Account</span>
            </li>
            <li>
              <p>
                Initiate your journey by registering an account with us. This
                first step is your gateway to the mining world.
              </p>
            </li>

            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Select Your Ideal Mining Configuration</span>
            </li>
            <li>
              <p>
                Customize your mining experience by selecting the setup that
                aligns perfectly with your personal or professional mining
                goals. Whether it's a home-based rig, a dedicated office setup,
                or a sophisticated virtual operation, choose the option that
                best fits your mining strategy and environment. Your choice here
                lays the foundation for your mining efficiency and success.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Enjoy 24 Months of Continuous Technical Support</span>
            </li>
            <li>
              <p>
                Benefit from our dedicated 24/7 technical support. We ensure
                your mining experience is smooth and uninterrupted.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="lets-icons:check-fill"
                className="text-primary"
                width={20}
              />
              <span>Start Receiving Cryptocurrency</span>
            </li>
            <li>
              <p>
                Witness the fruits of your mining venture as you begin to
                receive cryptocurrency, marking the start of your successful
                mining journey.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 container mx-auto py-24">
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
