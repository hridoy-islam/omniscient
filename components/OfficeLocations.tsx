"use client";
import {
  MapPin,
  ArrowRight,
  Building2,
  Globe,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfficeLocations() {
  const locations = [
    {
      name: "Dubai",
      country: "United Arab Emirates",
      softwares: "100+",
      clients: "500+",
      description: "Middle East Hub",
      timezone: "GMT+4",
      phone: "+971-4-XXX-XXXX",
      email: "dubai@algopips.net",
      position: "top-1/4 right-1/3",
      features: ["24/7 Support", "Local Expertise", "Arabic Support"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Singapore",
      country: "Singapore",
      softwares: "150+",
      clients: "750+",
      description: "Asia-Pacific Center",
      timezone: "GMT+8",
      phone: "+65-XXXX-XXXX",
      email: "singapore@algopips.net",
      position: "top-1/2 right-1/4",
      features: ["Multi-Currency", "Regional Markets", "Expert Analysis"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "New York",
      country: "United States",
      softwares: "200+",
      clients: "1000+",
      description: "Global HQ",
      timezone: "GMT-5",
      phone: "+1-XXX-XXX-XXXX",
      email: "newyork@algopips.net",
      position: "top-1/3 left-1/4",
      features: ["Wall Street Access", "Advanced Tools", "Premium Support"],
      gradient: "from-indigo-500 to-cyan-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(102,126,234,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">Global Network</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our <span className="text-gradient">Worldwide</span>
            <br />
            Presence
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connect with our expert teams across three continents for
            personalized support and local market expertise.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mb-20">
          {/* Map Background */}
          <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700/50 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(102,126,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(102,126,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Location Pins */}
            {locations.map((location, index) => (
              <div
                key={index}
                className={`absolute ${location.position} group cursor-pointer`}
              >
                {/* Pin */}
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-primary rounded-full animate-ping"></div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="glass rounded-xl p-4 min-w-48">
                    <div className="text-white font-bold text-lg">
                      {location.name}
                    </div>
                    <div className="text-slate-300 text-sm">
                      {location.description}
                    </div>
                    <div className="text-blue-400 text-sm mt-1">
                      {location.clients} Active Clients
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#764ba2" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 25% 33% Q 50% 20% 75% 50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <path
                d="M 25% 33% Q 50% 60% 66% 25%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/30 card-hover hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-slate-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location.country}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${location.gradient} rounded-2xl flex items-center justify-center`}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {location.softwares}
                  </div>
                  <div className="text-slate-400 text-sm">Licenses</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {location.clients}
                  </div>
                  <div className="text-slate-400 text-sm">Clients</div>
                </div>
              </div> */}

              {/* Contact Info */}
              {/* <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{location.timezone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{location.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{location.email}</span>
                </div>
              </div> */}

              {/* Features */}
              <div className="space-y-2 mb-6">
                {location.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              {/* <Button className="w-full btn-gradient text-white font-bold py-4 rounded-2xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                Contact {location.name}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button> */}

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
