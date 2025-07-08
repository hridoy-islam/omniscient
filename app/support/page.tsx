"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Ticket,
  Mail,
  HelpCircle,
  MessageSquare,
  Clock,
  Phone,
  FileText,
  Search,
  CheckCircle,
  AlertCircle,
  Users,
  Headphones,
} from "lucide-react";

export default function SupportPage() {
  const supportCategories = [
    {
      icon: <Ticket className="w-8 h-8 text-blue-600" />,
      title: "Technical Support",
      description: "Get help with installation, setup, and technical issues",
      color: "blue",
      count: "24/7 Available",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Trading Assistance",
      description: "Expert guidance on trading strategies and optimization",
      color: "purple",
      count: "Expert Team",
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Account Management",
      description: "Help with account setup, verification, and management",
      color: "indigo",
      count: "Dedicated Manager",
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-cyan-600" />,
      title: "General Inquiries",
      description: "Questions about features, pricing, and general information",
      color: "cyan",
      count: "Quick Response",
    },
  ];

  const supportStats = [
    {
      label: "Average Response Time",
      value: "< 2 Hours",
      icon: <Clock className="w-6 h-6 text-green-600" />,
    },
    {
      label: "Customer Satisfaction",
      value: "98.5%",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Issues Resolved",
      value: "99.2%",
      icon: <AlertCircle className="w-6 h-6 text-purple-600" />,
    },
    {
      label: "Support Languages",
      value: "12+",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BreadCumb
        title="Support Center"
        subtitle="Get expert assistance with our comprehensive support system and dedicated team"
      />

      {/* Support Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <div
                key={index}
                className="glass-white rounded-2xl p-6 text-center shadow-blue border border-gray-100"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-2xl font-black text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Support Categories */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <Headphones className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold">
                      Support Categories
                    </span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  How can we{" "}
                  <span className="text-gradient">help you today?</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Choose the category that best matches your needs, and our
                  expert team will assist you promptly.
                </p>
              </div>

              {/* Support Categories Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {supportCategories.map((category, index) => (
                  <div
                    key={index}
                    className="group glass-white rounded-3xl p-8 shadow-blue hover:shadow-blue-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover cursor-pointer"
                  >
                    <div
                      className={`w-16 h-16 bg-${category.color}-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${category.color}-100 transition-colors`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        {category.count}
                      </span>
                      <div className="w-8 h-px bg-blue-400 group-hover:w-12 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Search */}
              {/* <div className="glass-blue rounded-3xl p-8 shadow-blue">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Search className="w-6 h-6 text-blue-600 mr-3" />
                  Quick Help Search
                </h3>
                <p className="text-gray-600 mb-6">
                  Search our knowledge base for instant answers
                </p>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <Button className="btn-gradient text-white font-bold px-8 py-4 rounded-2xl">
                    Search
                  </Button>
                </div>
              </div> */}
            </div>

            {/* Right Column - Contact Info & Ticket Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold mb-1">
                        Email Support
                      </h4>
                      <a
                        href="mailto:support@algopips.net"
                        className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                      >
                        support@algopips.net
                      </a>
                      <p className="text-gray-500 text-sm mt-1">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold mb-1">
                        Phone Support
                      </h4>
                      <p className="text-gray-700 font-medium">
                        +1-800-Algopips
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        24/7 Available
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold mb-1">
                        Live Chat
                      </h4>
                      <p className="text-gray-700 font-medium">
                        Available 24/7
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Instant assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Ticket Form */}
              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Ticket className="w-6 h-6 text-purple-600 mr-3" />
                  Create Support Ticket
                </h3>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="technical">Technical Support</option>
                      <option value="trading">Trading Assistance</option>
                      <option value="account">Account Management</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your issue in detail..."
                    ></textarea>
                  </div>

                  <Button className="w-full btn-gradient text-white font-bold py-4 rounded-2xl shadow-blue hover:shadow-blue-lg transition-all duration-200">
                    Submit Ticket
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
