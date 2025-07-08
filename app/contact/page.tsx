"use client";
import BreadCumb from "@/components/BreadCumb";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Clock,
  Phone,
  Send,
  Building2,
  Globe,
  MessageCircle,
  Calendar,
  Users,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      name: "New York (HQ)",
      address: "13thStreet, 47 W 13th St\nNew York, NY 10011, USA",
      phone: "+1-800-ROBOFX",
      email: "newyork@algopips.net",
      timezone: "EST (GMT-5)",
      hours: "24/7 Available",
      color: "blue",
      isHQ: true,
    },
    {
      name: "Dubai Office",
      address: "Business Bay\nDubai, UAE",
      phone: "+971-4-XXX-XXXX",
      email: "dubai@algopips.net",
      timezone: "GST (GMT+4)",
      hours: "Sun-Thu: 9AM-6PM",
      color: "purple",
      isHQ: false,
    },
    {
      name: "Singapore Office",
      address: "Marina Bay\nSingapore",
      phone: "+65-XXXX-XXXX",
      email: "singapore@algopips.net",
      timezone: "SGT (GMT+8)",
      hours: "Mon-Fri: 9AM-6PM",
      color: "indigo",
      isHQ: false,
    },
  ];

  const contactMethods = [
    // {
    //   icon: <Phone className="w-8 h-8 text-green-600" />,
    //   title: "Phone Support",
    //   description: "Speak directly with our experts",
    //   contact: "+1-800-ROBOFX",
    //   availability: "24/7 Available",
    //   color: "green",
    // },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Support",
      description: "Send us your detailed inquiries",
      contact: "support@algopips.net",
      availability: "Response within 2 hours",
      color: "blue",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Start Chat",
      availability: "Available 24/7",
      color: "purple",
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Book Now",
      availability: "Flexible scheduling",
      color: "indigo",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BreadCumb
        title="Contact Us"
        subtitle="Get in touch with our expert team for personalized trading solutions and support"
      />

      {/* Contact Methods */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group glass-white rounded-3xl p-6 text-center shadow-blue hover:shadow-blue-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover cursor-pointer"
              >
                <div
                  className={`w-16 h-16 bg-${method.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${method.color}-100 transition-colors`}
                >
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <div className="text-blue-600 font-bold mb-1">
                  {method.contact}
                </div>
                <div className="text-gray-500 text-xs">
                  {method.availability}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <Send className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold">
                      Send Message
                    </span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Let's start a{" "}
                  <span className="text-gradient">conversation</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to transform your trading experience? Our expert team is
                  here to guide you every step of the way.
                </p>
              </div>

              {/* Contact Form */}
              <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-900 font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your trading goals and how we can help you achieve them..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="consent"
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      I agree to receive communications from RoboFX Trader and
                      understand that I can unsubscribe at any time.
                    </label>
                  </div>

                  <Button className="w-full btn-gradient text-white font-bold py-6 rounded-2xl text-lg shadow-blue-lg hover:shadow-blue transition-all duration-200 group">
                    <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - Office Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-3 glass-blue rounded-full px-6 py-3 shadow-blue">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold">Our Offices</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Visit us <span className="text-gradient">worldwide</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With offices across three continents, we're always close to
                  our clients.
                </p>
              </div>

              {/* Office Cards */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 hover:border-blue-200 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {office.name}
                          </h3>
                          {office.isHQ && (
                            <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                              HQ
                            </span>
                          )}
                        </div>
                        {/* <p className="text-gray-600 whitespace-pre-line">
                          {office.address}
                        </p> */}
                      </div>
                      {/* <div
                        className={`w-12 h-12 bg-${office.color}-50 rounded-2xl flex items-center justify-center`}
                      >
                        <Building2
                          className={`w-6 h-6 text-${office.color}-600`}
                        />
                      </div> */}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {/* <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">
                            {office.phone}
                          </span>
                        </div> */}
                        {/* <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                          >
                            {office.email}
                          </a>
                        </div> */}
                      </div>
                      <div className="space-y-3">
                        {/* <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700 font-medium">
                            {office.timezone}
                          </span>
                        </div> */}
                        {/* <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-indigo-600" />
                          <span className="text-gray-700 font-medium">
                            {office.hours}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="glass-white rounded-3xl p-8 shadow-blue border border-gray-100 max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              For urgent trading issues or technical emergencies, our dedicated
              support team is available 24/7 to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-white font-bold px-8 py-4 rounded-xl shadow-blue hover:shadow-blue-lg transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button className="btn-outline-gradient text-gray-700 hover:text-blue-600 font-bold px-8 py-4 rounded-xl bg-white hover:bg-blue-50 transition-all duration-200">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
