import Image from "next/image";
import image28 from "../../public/image28.png";
import image29 from "../../public/image29.png";
import image30 from "../../public/image30.png";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function WhyChooseUs() {
  return (
    <div className="bg-primaryLight p-10">
      <div className="text-center px-10 space-y-4">
        <h2>Why Choose Us</h2>
        <h3 className="text-primary text-4xl font-semibold">
          Elevate Your Earnings: The Mining Farm Advantage!
        </h3>
        <p className="px-20">
          Dive into a realm where every choice propels you towards maximum
          profits and efficiency. Why settle for less? Choose excellence with
          Mining Farm and let your investments thrive! 💎🚀
        </p>
        <p>
          These RTX GPUs are designed to deliver impressive hash rates for
          mining, backed by NVIDIA's cutting-edge architecture. Their advanced
          cooling solutions ensure sustained performance, and additional
          features like ray tracing and DLSS enhance their versatility beyond
          crypto mining.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 my-6">
        <div>
          <Image
            src={image29}
            alt=""
            className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
          />
          <div className="space-y-3 my-4">
            <h3 className="text-lg font-semibold">RTX 3080 Mining Master</h3>
            <ol className="space-y-3 overflow:none">
              <li>GPU Cores: 8,704 CUDA Cores</li>
              <li>Memory: 10GB GDDR6X</li>
              <li>Hash Rate: Approximately 98 MH/s (Ethereum)</li>
              <li>Power Consumption: 320 Watts</li>
              <li>Cooling System: High-Efficiency Triple-Fan</li>
              <li>
                Additional Features: 2nd Gen Ray Tracing Cores, 3rd Gen Tensor
                Cores, PCIe 4.0 support
              </li>
            </ol>
            <Link href={"/"}>
              <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={image29}
            alt=""
            className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
          />
          <div className="space-y-3 my-4">
            <h3 className="text-lg font-semibold">RTX 3090 Ti Crypto King</h3>
            <ol className="space-y-3 overflow:none">
              <li>GPU Cores: 10,496 CUDA Cores</li>
              <li>Memory: 24GB GDDR6X</li>
              <li>Hash Rate: Up to 120 MH/s (Ethereum)</li>
              <li>Power Consumption: 350 Watts</li>
              <li>Cooling System: Advanced Dual-Axial Flow-Through</li>
              <li>
                Additional Features: VR Ready, NVIDIA DLSS, 8K HDR gaming
                support, HDMI 2.1
              </li>
            </ol>
            <Link href={"/"}>
              <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={image30}
            alt=""
            className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
          />
          <div className="space-y-3 my-4">
            <h3 className="text-lg font-semibold">RTX 3070 Ti Hash Wizard</h3>
            <ol className="space-y-3 overflow:none">
              <li>GPU Cores: 6,144 CUDA Cores</li>
              <li>Memory: 8GB GDDR6X</li>
              <li>Hash Rate: Approximately 60 MH/s (Ethereum)</li>
              <li>Power Consumption: 290 Watts</li>
              <li>Cooling System: Dual-Fan Thermal Design</li>
              <li>
                Additional Features: Ray Tracing and Tensor Cores, NVIDIA
                G-Sync, VR Ready
              </li>
            </ol>
            <Link href={"/"}>
              <Button className="btn-basic px-5 py-2 rounded-md mt-2">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
