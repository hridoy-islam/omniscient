"use client";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Academic Advisors",
      description:
        "Dedicated advisors for undergraduate, postgraduate, and mature students with personalized guidance.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flexible Learning Options",
      description:
        "Courses designed to fit your lifestyle, whether you're starting fresh or returning to education.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Value Education",
      description:
        "Competitive advantages in quality-driven tuition for both British and international students.",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Career Support",
      description:
        "Our staff help you secure the most appropriate job for your career advancement.",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "London Location",
      description:
        "Vibrant environment in the heart of London with rich cultural and social opportunities.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "International Environment",
      description:
        "Cosmopolitan character making student life challenging, rewarding, and exciting.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-purple-100">
              <span className="text-purple-600 font-bold text-lg">
                Why Choose Us
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Omniscient Education?
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            There are many reasons to choose us as your education partner. Here
            are the most important ones that set us apart.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl hover:shadow-2xl border border-purple-100 hover:border-purple-200 transition-all duration-500 transform hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {reason.description}
              </p>

              {/* Check Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-purple-100 text-center">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            Ready to Experience the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Omniscient Difference?
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have chosen Omniscient Education for
            their academic journey and career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              🎓 Start Your Journey
            </button>
            <button className="border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl transform hover:scale-105">
              📞 Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
