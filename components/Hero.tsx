"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Globe,
  Play,
  Star,
  Sparkles,
  GraduationCap,
  Target,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-64 left-64 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-64 right-64 w-5 h-5 bg-pink-500 rounded-full animate-bounce delay-1500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-6 py-3 border border-purple-200 shadow-lg animate-shimmer">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <Sparkles
                className="w-5 h-5 text-purple-600 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-purple-700 font-bold text-sm uppercase tracking-wide">
                Excellence in Education
              </span>
            </div>

            {/* Main Headline with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <div className="overflow-hidden">
                  <span className="block text-gray-900 animate-slide-up">
                    Shape Your
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent animate-slide-up delay-200 relative">
                    Future
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-expand"></div>
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-gray-900 animate-slide-up delay-400">
                    With
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent animate-slide-up delay-600">
                    Omniscient
                  </span>
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in delay-800">
                Discover world-class education programs designed to unlock your
                potential and accelerate your career growth in today's
                competitive landscape.
              </p>
            </div>

            {/* Animated Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in delay-1000">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  text: "Expert Faculty",
                  color: "purple",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  text: "Career Focus",
                  color: "pink",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  text: "Global Recognition",
                  color: "purple",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group p-4 bg-white rounded-2xl shadow-lg border-2 ${
                    feature.color === "purple"
                      ? "border-purple-100 hover:border-purple-300"
                      : "border-pink-100 hover:border-pink-300"
                  } transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 ${
                      feature.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-pink-100 text-pink-600"
                    } rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {feature.text}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Hover Animations */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-1400">
              <Button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>

              <Button className="group border-2 border-purple-300 text-purple-600 hover:text-white hover:bg-purple-600 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 bg-white hover:shadow-xl transform hover:scale-105">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Explore Courses
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex items-center space-x-8 pt-6 animate-fade-in delay-1600">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  15+
                </div>
                <div className="text-gray-500 font-medium text-sm">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-purple-200 to-pink-200"></div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  5K+
                </div>
                <div className="text-gray-500 font-medium text-sm">
                  Happy Students
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-purple-200 to-pink-200"></div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-500 font-medium text-sm">
                  Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Illustration */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-[3rem] p-8 shadow-2xl border border-purple-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.1),transparent_50%)]"></div>

                {/* Main Image */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-lg">
                  <img
                    src="/heroimage.png"
                    alt="Modern Education Platform"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

                  {/* Floating UI Elements */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          150+ Courses
                        </div>
                        <div className="text-xs text-gray-500">
                          Available Now
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-500">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-gray-900">
                        4.9/5
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-1000">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          Live Classes
                        </div>
                        <div className="text-xs text-gray-500">
                          Join Anytime
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float delay-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          Certified
                        </div>
                        <div className="text-xs text-gray-500">Programs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
