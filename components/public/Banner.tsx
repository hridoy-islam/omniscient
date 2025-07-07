"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Crypto
                <span className="block text-gradient">Mining</span>
                <span className="block">Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                It's super simple - Your mining rigs are already set up and
                running.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Mining
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full text-lg font-semibold border-2 hover:bg-gray-50 bg-transparent"
              >
                Contact Us
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Global Mining Leader
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Turnkey Solutions
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Global Mining Leader
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="/banner.png"
                alt="Crypto Mining Setup"
                className="w-full h-auto rounded-2xl "
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-float opacity-80"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-float opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
