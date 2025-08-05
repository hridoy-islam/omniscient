"use client";
import { Globe, Award, Users, TrendingUp } from "lucide-react";

export default function PartnerUniversities() {
  const countries = [
    {
      flag: "🇬🇧",
      name: "United Kingdom",
      universities: 25,
      popular: [
        "University of London",
        "University of Manchester",
        "University of Edinburgh",
      ],
    },
    {
      flag: "🇺🇸",
      name: "United States",
      universities: 15,
      popular: ["Harvard University", "MIT", "Stanford University"],
    },
    {
      flag: "🇨🇦",
      name: "Canada",
      universities: 12,
      popular: ["University of Toronto", "McGill University", "UBC"],
    },
    {
      flag: "🇦🇺",
      name: "Australia",
      universities: 10,
      popular: ["University of Melbourne", "ANU", "University of Sydney"],
    },
    {
      flag: "🇸🇪",
      name: "Sweden",
      universities: 8,
      popular: ["KTH Royal Institute", "Lund University", "Uppsala University"],
    },
    {
      flag: "🇩🇪",
      name: "Germany",
      universities: 6,
      popular: ["TU Munich", "Heidelberg University", "Humboldt University"],
    },
  ];

  const stats = [
    {
      icon: <Globe className="w-6 h-6" />,
      number: "60+",
      label: "Partner Universities",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "1000+",
      label: "Available Courses",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Countries Covered",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "100%",
      label: "Success Rate",
      color: "from-pink-600 to-purple-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-purple-100">
              <span className="text-purple-600 font-bold text-lg">
                Global Network
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Our Partner</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Universities
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We work with prestigious universities and colleges worldwide to
            provide you with the best educational opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-purple-100 text-center group hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl hover:shadow-2xl border border-purple-100 hover:border-purple-200 transition-all duration-500 transform hover:scale-105"
            >
              {/* Country Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {country.universities} Universities
                    </p>
                  </div>
                </div>
              </div>

              {/* Popular Universities */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Popular Universities
                </h4>
                <div className="space-y-2">
                  {country.popular.map((uni, uniIndex) => (
                    <div
                      key={uniIndex}
                      className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-purple-100 text-center">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              University Match
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our expert advisors help you choose the right university and
            program that aligns with your career goals and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              🎯 Find My University
            </button>
            <button className="border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl transform hover:scale-105">
              📋 View All Partners
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
