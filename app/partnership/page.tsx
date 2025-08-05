"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Handshake,
  Building,
  GraduationCap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  MapPin,
  Target,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnershipPage() {
  const partnershipTypes = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "UK/EU University Partnerships",
      description:
        "We help UK/EU students to enrol at their dream Universities/Colleges in the UK. We can help you to ensure a place in any University in the UK if you can fulfil the requirements.",
      image: "/unicol.jpg",
      benefits: [
        "Direct admission support to UK universities",
        "Guaranteed placement if requirements are met",
        "One-to-one relationships with institutions",
        "Comprehensive application guidance",
        "Interview preparation and support",
      ],
      color: "purple",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International University Network",
      description:
        "We are working with many Universities from Europe, Australia, Canada, and the USA. We want to ensure that potential young people are getting the best education from world-class Institutes.",
      image: "/intuni.jpg",
      benefits: [
        "Access to universities in Europe, Australia, Canada, USA",
        "World-class institute partnerships",
        "Cultural diversity promotion",
        "Global education opportunities",
        "International student recruitment",
      ],
      color: "pink",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Educational Institution Partnerships",
      description:
        "We have built up one-to-one relationships effectively with different Universities/Colleges and other partner organisations that are also working in Higher Education.",
      image: "/part.png",
      benefits: [
        "Effective one-to-one institutional relationships",
        "Partner organization collaborations",
        "Higher education network access",
        "Talented student recruitment",
        "Mutual benefit partnerships",
      ],
      color: "purple",
    },
  ];

  const partnerUniversities = [
    {
      name: "University of London",
      logo: "/placeholder.svg?height=80&width=120&text=UoL",
      country: "UK",
    },
    {
      name: "Cambridge University",
      logo: "/placeholder.svg?height=80&width=120&text=Cambridge",
      country: "UK",
    },
    {
      name: "Oxford University",
      logo: "/placeholder.svg?height=80&width=120&text=Oxford",
      country: "UK",
    },
    {
      name: "Imperial College",
      logo: "/placeholder.svg?height=80&width=120&text=Imperial",
      country: "UK",
    },
    {
      name: "University of Toronto",
      logo: "/placeholder.svg?height=80&width=120&text=Toronto",
      country: "Canada",
    },
    {
      name: "University of Sydney",
      logo: "/placeholder.svg?height=80&width=120&text=Sydney",
      country: "Australia",
    },
    {
      name: "Harvard University",
      logo: "/placeholder.svg?height=80&width=120&text=Harvard",
      country: "USA",
    },
    {
      name: "Stockholm University",
      logo: "/placeholder.svg?height=80&width=120&text=Stockholm",
      country: "Sweden",
    },
  ];

  const partnershipBenefits = [
    {
      title: "For Universities",
      icon: <Building className="w-8 h-8" />,
      benefits: [
        "Access to talented and culturally diverse students",
        "Global student recruitment support",
        "Quality-assured student selection",
        "Reduced recruitment costs",
        "Enhanced international presence",
      ],
    },
    {
      title: "For Students",
      icon: <Users className="w-8 h-8" />,
      benefits: [
        "Dream university placement guarantee",
        "Expert admission consultation",
        "Comprehensive application support",
        "Interview preparation",
        "Visa application assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Handshake className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Partnership </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Connecting talented students with world-class universities through
              strategic partnerships and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our Partnership </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At the same time, Universities/Colleges are getting the most
              talented and culturally diverse students around the Globe. We
              ensure that potential young people are getting the best education
              from world-class Institutes while universities receive exceptional
              students who will contribute to their academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in student selection and
                university partnerships, ensuring mutual success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Network
              </h3>
              <p className="text-gray-600">
                Our extensive network spans across the UK, Europe, Australia,
                Canada, and the USA.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                One-to-One Relationships
              </h3>
              <p className="text-gray-600">
                We build effective personal relationships with universities and
                partner organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Partnership </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive partnership programs designed to
              connect students with their dream institutions.
            </p>
          </div>

          <div className="space-y-20">
            {partnershipTypes.map((partnership, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 ${
                      partnership.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-pink-100 text-pink-600"
                    } rounded-2xl flex items-center justify-center`}
                  >
                    {partnership.icon}
                  </div>

                  <h3 className="text-3xl font-black text-gray-900">
                    {partnership.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {partnership.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-900">
                      Key Benefits:
                    </h4>
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${
                            partnership.color === "purple"
                              ? "text-purple-600"
                              : "text-pink-600"
                          }`}
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`${
                      partnership.color === "purple"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    } text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 group`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${
                      partnership.color === "purple"
                        ? "from-purple-100 to-pink-100"
                        : "from-pink-100 to-purple-100"
                    } rounded-3xl p-8 shadow-xl`}
                  >
                    <img
                      src={partnership.image || "/placeholder.svg"}
                      alt={partnership.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Mutual </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships create value for both educational institutions
              and students worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {partnershipBenefits.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-16 h-16 ${
                      index === 0
                        ? "bg-purple-100 text-purple-600"
                        : "bg-pink-100 text-pink-600"
                    } rounded-2xl flex items-center justify-center`}
                  >
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our Partner </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Universities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with prestigious universities across the UK, Europe,
              Australia, Canada, and the USA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {partnerUniversities.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full h-16 object-contain mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {partner.name}
                </h4>
                <div className="flex items-center justify-center space-x-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {partner.country}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              We work with{" "}
              <span className="font-bold text-purple-600">
                60+ UK universities and colleges
              </span>{" "}
              offering
              <span className="font-bold text-pink-600"> 1000+ courses</span>
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
              View All Partner Universities
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-black mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join our network of prestigious educational institutions and help
              us connect talented students with world-class education
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Become a Partner
              </Button>
              <Button className="border-2 border-white bg-white text-purple-600 hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Contact Partnership Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
