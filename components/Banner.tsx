"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  TrendingUp,
  Zap,
  Star,
  Users,
  Award,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-60 right-32 w-12 h-12 bg-gradient-secondary rounded-full opacity-10 animate-float delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-accent rounded-full opacity-10 animate-float delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 glass-white rounded-full px-8 py-4 shadow-blue">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-gray-700 text-sm font-semibold">
                4.9/5 Rating
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-gray-700 text-sm font-semibold">
                10,000+ Traders
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700 text-sm font-semibold">
                Award Winning
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 glass-blue rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                AI-Powered Trading Revolution
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9]">
                Supercharge your{" "}
                <span className="text-gradient relative">
                  trading journey
                  {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full"></div> */}
                </span>{" "}
                with <span className="text-gradient">Algopips</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Algopips Software is programmed to adapt to the current market
                conditions as it executes trades on both sides of the market
                24/7.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: <TrendingUp className="w-4 h-4" />,
                  text: "24/7 Trading",
                  color: "blue",
                },
                {
                  icon: <Zap className="w-4 h-4" />,
                  text: "AI-Powered",
                  color: "purple",
                },
                {
                  icon: <TrendingUp className="w-4 h-4" />,
                  text: "Market Adaptive",
                  color: "indigo",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white border-2 border-gray-100 hover:border-blue-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className={`text-${feature.color}-500`}>
                    {feature.icon}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-gradient text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button className="btn-outline-gradient text-gray-700 hover:text-blue-600 font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-200 group bg-white hover:bg-blue-50">
                <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Download AI Robot
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">99.9%</div>
                <div className="text-gray-500 text-sm font-medium">Uptime</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">$2M+</div>
                <div className="text-gray-500 text-sm font-medium">
                  Daily Volume
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">150+</div>
                <div className="text-gray-500 text-sm font-medium">
                  Countries
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Robot */}
          <div className="relative">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl scale-110 opacity-60"></div>

              {/* Robot Container */}
              <div className="relative z-10 glass-white rounded-3xl p-8 shadow-blue-lg">
                <Image
                  src="/robo.png"
                  alt="Algopips"
                  width={600}
                  height={600}
                  className="w-full h-auto animate-float"
                  priority
                />

                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -right-6 glass-white rounded-2xl p-4 shadow-blue animate-fade-in-up">
                  <div className="text-green-600 font-black text-xl">
                    +24.5%
                  </div>
                  <div className="text-gray-500 text-sm font-medium">
                    Today's Profit
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 glass-white rounded-2xl p-4 shadow-blue animate-fade-in-up delay-500">
                  <div className="text-blue-600 font-black text-xl">156</div>
                  <div className="text-gray-500 text-sm font-medium">
                    Active Trades
                  </div>
                </div>

                <div className="absolute top-1/2 -left-10 glass-white rounded-2xl p-4 shadow-blue animate-fade-in-left">
                  <div className="text-purple-600 font-black text-xl">24/7</div>
                  <div className="text-gray-500 text-sm font-medium">
                    Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
