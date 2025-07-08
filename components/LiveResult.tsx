"use client";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Shield,
  BarChart3,
  Award,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function LiveResult() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold">Live Results</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Live Daily Results Of Algopips{" "}
                <span className="text-gradient">VERIFIED</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Algopips is a automated online trading tool that enables
                  traders to evaluate, analyse, share and compare their trading
                  strategies and trading account performance.
                </p>
                <p>
                  2020 has been a rollercoaster ride for markets, with plenty of
                  crashes, rallies, insolvencies, and stimulus packages. We are
                  proud to announce that Algopips Software market volatility
                  closed every week in profit.
                </p>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="inline-flex items-center space-x-3 glass-white rounded-2xl px-8 py-4 shadow-blue border border-green-200">
              <Shield className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <div className="text-green-600 font-black text-lg">
                  Algopips Verified Account
                </div>
                <div className="text-gray-600 text-sm">
                  Independently verified by Myfxbook
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-black text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Trading Active</div>
                <div className="text-gray-500 text-sm mt-2">
                  Continuous market monitoring
                </div>
              </div>

              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 card-hover">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-black text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Verified Results
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  Independently audited
                </div>
              </div>

              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 card-hover">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-black text-purple-600 mb-2">
                  2020+
                </div>
                <div className="text-gray-600 font-medium">
                  Profitable Weeks
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  Consistent performance
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link href={"getstarted"}>
                <Button className="btn-gradient text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue group">
                  <TrendingUp className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  View Live Results
                  <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
