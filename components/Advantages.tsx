"use client";
import {
  Settings,
  Monitor,
  GraduationCap,
  Clock,
  Eye,
  Headphones,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "One Time Setup",
      description:
        "As once you avail our software our team will install the EA software for automated trading in your system or in VPS. as our team will guide and support you till start to get your profit.",
      color: "blue",
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "Smooth Experience on any Device",
      description:
        "The custom- built trading platform has been adapted for all devices you may choose and switching is mobile, Computer Etc., Easy withdrawal in any time with any Device.",
      color: "purple",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: "Zero Trading Knowledge Required",
      description:
        "The custom- built trading platform has been adapted for all devices you may choose and switching is mobile, Computer Etc., Easy withdrawal in any time with any Device.",
      color: "indigo",
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "Start Trading in 24 Hours",
      description:
        "Once your setup is completed, your trade will start and you can see your daily profits.",
      color: "cyan",
    },
    {
      icon: <Eye className="w-8 h-8 text-violet-600" />,
      title: "Zero Monitoring",
      description:
        "As our client no need to watch the market, as our EA software will trade by itself with most profitable strategy.",
      color: "violet",
    },
    {
      icon: <Headphones className="w-8 h-8 text-pink-600" />,
      title: "Dedicated Expert Support",
      description:
        "24/7 expert analysers monitor your Auto Trade for Entire Period with Day & Night Shift.",
      color: "pink",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold">Advantages</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            What you are getting
            <br />
            <span className="text-gradient">from us</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive benefits and features that make our
            trading system the ultimate choice for automated success.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-blue hover:shadow-blue-lg transition-all duration-500 border border-gray-100 hover:border-blue-200 card-hover"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-blue">
                <span className="text-white font-black text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon Container */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div
                  className={`w-16 h-16 bg-${advantage.color}-50 rounded-2xl flex items-center justify-center group-hover:bg-${advantage.color}-100 transition-colors`}
                >
                  {advantage.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {advantage.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {advantage.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-blue-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">Included</span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
