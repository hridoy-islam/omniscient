"use client";
import {
  Users,
  GraduationCap,
  Globe,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5,000+",
      label: "Happy Students",
      description: "Successfully enrolled",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "60+",
      label: "Partner Universities",
      description: "Across multiple countries",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Countries",
      description: "Global reach",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Success Rate",
      description: "Admission success",
      color: "from-pink-600 to-purple-600",
      bgColor: "from-pink-50 to-purple-50",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
      description: "In education consulting",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "1000+",
      label: "Courses Available",
      description: "Diverse programs",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-25 to-pink-25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(219,39,119,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-purple-100">
              <span className="text-purple-600 font-bold">Our Impact</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has helped thousands of students
            achieve their educational dreams worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-purple-100 hover:border-purple-200 transition-all duration-500 transform hover:scale-105 text-center"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                  {stat.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-purple-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Become part of our growing community of successful students and
              achieve your educational goals.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
