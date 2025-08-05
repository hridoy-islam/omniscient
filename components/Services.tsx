"use client";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: "🎓",
      title: "Academic Excellence Programs",
      description:
        "Comprehensive academic courses designed with international standards, featuring expert instructors and cutting-edge curriculum.",
      features: [
        "Certified Programs",
        "Expert Instructors",
        "Flexible Learning",
        "Global Recognition",
      ],
      color: "from-pink-500 to-purple-400",
      bgColor: "from-pink-50 to-purple-50",
      stats: "150+ Courses",
    },
    {
      icon: "🤝",
      title: "Student Success Support",
      description:
        "Dedicated support ecosystem guiding students through their educational journey with personalized mentorship and career development.",
      features: [
        "Career Guidance",
        "Academic Support",
        "Mentorship Programs",
        "Success Tracking",
      ],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      stats: "24/7 Support",
    },
    {
      icon: "🌍",
      title: "Global Education Network",
      description:
        "International programs connecting students with prestigious universities and institutions across 50+ countries worldwide.",
      features: [
        "Study Abroad",
        "Exchange Programs",
        "Global Partnerships",
        "Cultural Immersion",
      ],
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
      stats: "50+ Countries",
    },
    {
      icon: "🏆",
      title: "Professional Certification Hub",
      description:
        "Industry-recognized certifications and professional development programs to enhance career prospects and skill advancement.",
      features: [
        "Industry Standards",
        "Practical Training",
        "Career Advancement",
        "Skill Validation",
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      stats: "98% Success",
    },
    {
      icon: "🚀",
      title: "Skills Development Lab",
      description:
        "Targeted skill-building programs preparing students for modern workforce demands and emerging industry requirements.",
      features: [
        "Technical Skills",
        "Soft Skills",
        "Leadership Training",
        "Future-Ready Skills",
      ],
      color: "from-pink-600 to-purple-600",
      bgColor: "from-pink-50 to-purple-50",
      stats: "5K+ Graduates",
    },
    {
      icon: "💡",
      title: "Innovation & Research Center",
      description:
        "Creative learning environment fostering innovation, entrepreneurship, and cutting-edge research in emerging technologies.",
      features: [
        "Research Projects",
        "Innovation Labs",
        "Startup Incubation",
        "Tech Innovation",
      ],
      color: "from-purple-600 to-pink-700",
      bgColor: "from-purple-50 to-pink-50",
      stats: "100+ Projects",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-25 to-purple-25"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-pink-100 flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <span className="text-pink-600 font-bold text-lg">
                Our Services
              </span>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Services We</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Proudly Offer
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive educational services designed to empower students and
            professionals with the knowledge, skills, and opportunities needed
            for success in today's dynamic global marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl hover:shadow-2xl border border-pink-100 hover:border-pink-200 transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Floating Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {service.stats}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      Achievement
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-600 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="flex items-center space-x-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-pink-100 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Educational Journey?
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of successful students who have transformed their
              careers through our comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center">
                  🚀 Get Started Today
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-pink-300 text-pink-600 hover:bg-pink-100 hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl transform hover:scale-105">
                📞 Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
