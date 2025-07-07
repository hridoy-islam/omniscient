import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Zap,
  Activity,
  HardDrive,
  Thermometer,
  Power,
  Clock,
} from "lucide-react";

export default function AboutStep() {
  const features = [
    {
      icon: Cpu,
      title: "Active Rigs",
      description:
        "Harness the power of 13 robust rigs, currently mining to secure your digital fortune.",
    },
    {
      icon: HardDrive,
      title: "Elite Hardware",
      description:
        "Each rig, like Rig 00001, is equipped with the prestigious Nvidia GeForce RTX 3090, the titan of graphics cards.",
    },
    {
      icon: Zap,
      title: "Peak Efficiency",
      description:
        "Achieve remarkable efficiency with a rate of 1.944 MH/J, ensuring more mining output per joule of energy consumed.",
    },
    {
      icon: Activity,
      title: "Optimized Operations",
      description:
        "Monitor your success with real-time stats showcasing actual rig proficiency and current profitability, ensuring your mining is always at its prime.",
    },
    {
      icon: Thermometer,
      title: "Cool and Collected",
      description:
        "Keep performance at its peak with optimal temperatures maintained around 19°C, and fan speeds adjusting to ensure longevity and stability.",
    },
    {
      icon: Power,
      title: "Power-Packed Performance",
      description:
        "With a power draw of 190 W, our rigs are tuned for maximum efficiency, maintaining an ideal balance between energy consumption and output.",
    },
    {
      icon: Clock,
      title: "Uninterrupted Mining",
      description:
        "Experience round-the-clock mining with our 24/7 operations, and with the ability to pause mining at your convenience, you have complete control.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">
            Unleashing the Titans of Mining: Welcome to the Ultimate Mining Farm
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Step into the Future of
            <span className="block text-gradient">Cryptocurrency Mining</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            At the forefront of the mining revolution, our premier mining farm
            sets a new standard for excellence. With the world's most formidable
            mining operations, we bring you an experience that epitomizes scale
            and efficiency. Join us and become part of the future where colossal
            mining power is at your command — welcome to the league of Mining
            Giants.
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Portal to Advanced Mining
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-hover border-2 hover:border-blue-200 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mining Made Sublime
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mining farm isn't just about raw power; it's about providing a
            seamless and user-centric experience. With anticipated payouts,
            transparent profitability insights, and the ease of pausing and
            resuming mining, we ensure that your journey to cryptocurrency
            accumulation is nothing short of magnificent.
          </p>
        </div>
      </div>
    </section>
  );
}
