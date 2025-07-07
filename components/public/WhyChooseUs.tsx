// import Image from "next/image";
// import image28 from "../../public/image28.png";
// import image29 from "../../public/image29.png";
// import image30 from "../../public/image30.png";
// import Link from "next/link";
// import { Button } from "@nextui-org/react";

// export default function WhyChooseUs() {
//   return (
//     <div className="bg-primaryLight p-10">
//       <div className="text-center px-10 space-y-4">
//         <h2>Why Choose Us</h2>
//         <h3 className="text-primary text-4xl font-semibold">
//           Elevate Your Earnings: The Mining Farm Advantage!
//         </h3>
//         <p className="md:px-20">
//           Dive into a realm where every choice propels you towards maximum
//           profits and efficiency. Why settle for less? Choose excellence with
//           Mining Farm and let your investments thrive! 💎🚀
//         </p>
//         <p>
//           These RTX GPUs are designed to deliver impressive hash rates for
//           mining, backed by NVIDIA's cutting-edge architecture. Their advanced
//           cooling solutions ensure sustained performance, and additional
//           features like ray tracing and DLSS enhance their versatility beyond
//           crypto mining.
//         </p>
//       </div>
//       <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 my-6">
//         <div>
//           <Image
//             src={image29}
//             alt=""
//             className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
//           />
//           <div className="space-y-3 my-4">
//             <h3 className="text-lg font-semibold">RTX 3080 Mining Master</h3>
//             <ol className="space-y-3 overflow:none">
//               <li>GPU Cores: 8,704 CUDA Cores</li>
//               <li>Memory: 10GB GDDR6X</li>
//               <li>Hash Rate: Approximately 98 MH/s (Ethereum)</li>
//               <li>Power Consumption: 320 Watts</li>
//               <li>Cooling System: High-Efficiency Triple-Fan</li>
//               <li>
//                 Additional Features: 2nd Gen Ray Tracing Cores, 3rd Gen Tensor
//                 Cores, PCIe 4.0 support
//               </li>
//             </ol>
//             <Link href={"/"}>
//               <Button className="btn-basic px-5 py-2 rounded-md mt-2">
//                 Buy Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <Image
//             src={image29}
//             alt=""
//             className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
//           />
//           <div className="space-y-3 my-4">
//             <h3 className="text-lg font-semibold">RTX 3090 Ti Crypto King</h3>
//             <ol className="space-y-3 overflow:none">
//               <li>GPU Cores: 10,496 CUDA Cores</li>
//               <li>Memory: 24GB GDDR6X</li>
//               <li>Hash Rate: Up to 120 MH/s (Ethereum)</li>
//               <li>Power Consumption: 350 Watts</li>
//               <li>Cooling System: Advanced Dual-Axial Flow-Through</li>
//               <li>
//                 Additional Features: VR Ready, NVIDIA DLSS, 8K HDR gaming
//                 support, HDMI 2.1
//               </li>
//             </ol>
//             <Link href={"/"}>
//               <Button className="btn-basic px-5 py-2 rounded-md mt-2">
//                 Buy Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <Image
//             src={image30}
//             alt=""
//             className="bg-white p-16 w-[376px] h-[376px] rounded-xl border-primary border"
//           />
//           <div className="space-y-3 my-4">
//             <h3 className="text-lg font-semibold">RTX 3070 Ti Hash Wizard</h3>
//             <ol className="space-y-3 overflow:none">
//               <li>GPU Cores: 6,144 CUDA Cores</li>
//               <li>Memory: 8GB GDDR6X</li>
//               <li>Hash Rate: Approximately 60 MH/s (Ethereum)</li>
//               <li>Power Consumption: 290 Watts</li>
//               <li>Cooling System: Dual-Fan Thermal Design</li>
//               <li>
//                 Additional Features: Ray Tracing and Tensor Cores, NVIDIA
//                 G-Sync, VR Ready
//               </li>
//             </ol>
//             <Link href={"/"}>
//               <Button className="btn-basic px-5 py-2 rounded-md mt-2">
//                 Buy Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Wifi, Settings, Rocket, Zap, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: "Next-Gen Hash Rate Performance",
      description:
        "🚀 Unparalleled Power: Experience the pinnacle of mining efficiency with our rig's exceptional hash rate. It's engineered to maximize your mining potential, ensuring you stay ahead in the competitive world of cryptocurrency.",
    },
    {
      icon: Wifi,
      title: "Energy-Efficient Operation",
      description:
        "🌱 Eco-Friendly Mining: Our rig is designed with sustainability in mind. It consumes less power without compromising on performance, reducing your carbon footprint while maximizing your mining rewards.",
    },
    {
      icon: Settings,
      title: "User-Friendly Interface",
      description:
        "💻 Ease of Use: Whether you're a beginner or a pro, our intuitive interface makes mining simple and straightforward. Enjoy hassle-free setup and operation, allowing you to focus on what matters most - your mining success.",
    },
    {
      icon: Rocket,
      title: "Robust Security Features",
      description:
        "🔒 Safe and Secure: With top-tier security protocols, our mining rig ensures your operations are protected against threats. Your digital assets and mining process are safeguarded, giving you peace of mind.",
    },
    {
      icon: Zap,
      title: "Compact and Sleek Design",
      description:
        "✨ Aesthetic Meets Practicality: Not only is our rig powerful, but it's also a visual treat. Its sleek, compact design fits seamlessly into any space, marrying form and function in a stylish, modern package.",
    },
    {
      icon: Shield,
      title: "24/7 Customer Support",
      description:
        "🛡️ Dedicated Assistance: Our team of experts is available around the clock to provide support and answer any questions. From technical issues to general inquiries, we're here to ensure your mining journey is smooth and profitable.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-200 font-semibold mb-4">
            MEET THE INNOVATION
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A Game-Changer in Cryptocurrency Mining
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            In the dynamic and ever-shifting landscape of cryptocurrency, our
            latest offering emerges as a true game-changer. This isn't just a
            crypto mining rig; it's a testament to innovation and
            forward-thinking design. Tailored to meet the needs of both seasoned
            miners and novices, it bridges the gap between complex technology
            and user accessibility. Prepare to be amazed by a product that not
            only promises high performance but also reshapes your mining
            experience with its revolutionary features. Welcome to the future of
            cryptocurrency mining, where efficiency, reliability, and elegance
            converge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 card-hover"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
