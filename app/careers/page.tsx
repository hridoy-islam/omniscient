"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  GraduationCap,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle,
  Building,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const jobOpenings = [
    {
      id: 1,
      title: "Education Consultant",
      department: "Admissions",
      location: "London, UK",
      type: "Full-time",
      salary: "£35,000 - £45,000",
      description:
        "Guide students through their educational journey, providing expert advice on course selection and university applications.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "3+ years experience in educational consulting",
        "Excellent communication and interpersonal skills",
        "Knowledge of UK higher education system",
      ],
      responsibilities: [
        "Conduct one-on-one consultations with students",
        "Assist with university application processes",
        "Provide guidance on course selection",
        "Maintain relationships with partner universities",
      ],
    },
    {
      id: 2,
      title: "International Admissions Specialist",
      department: "Admissions",
      location: "London, UK",
      type: "Full-time",
      salary: "£30,000 - £40,000",
      description:
        "Support international students with visa applications and admission processes for universities worldwide.",
      requirements: [
        "Experience with visa application processes",
        "Knowledge of international education systems",
        "Multilingual abilities preferred",
        "Strong attention to detail",
      ],
      responsibilities: [
        "Process visa applications for international students",
        "Coordinate with international universities",
        "Provide pre-arrival support services",
        "Maintain compliance with immigration requirements",
      ],
    },
    {
      id: 3,
      title: "Student Support Coordinator",
      department: "Student Services",
      location: "London, UK",
      type: "Full-time",
      salary: "£28,000 - £35,000",
      description:
        "Provide comprehensive support services to students throughout their academic journey.",
      requirements: [
        "Degree in Psychology, Social Work, or related field",
        "Experience in student support services",
        "Empathetic and patient personality",
        "Crisis intervention skills",
      ],
      responsibilities: [
        "Provide academic and personal support to students",
        "Organize orientation programs",
        "Coordinate accommodation services",
        "Handle student welfare issues",
      ],
    },
    {
      id: 4,
      title: "Marketing and Outreach Specialist",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
      salary: "£32,000 - £42,000",
      description:
        "Develop and implement marketing strategies to reach prospective students globally.",
      requirements: [
        "Bachelor's degree in Marketing or Communications",
        "Digital marketing experience",
        "Social media management skills",
        "Creative content creation abilities",
      ],
      responsibilities: [
        "Develop marketing campaigns for student recruitment",
        "Manage social media presence",
        "Create promotional materials",
        "Coordinate with international agents",
      ],
    },
    {
      id: 5,
      title: "Academic Partnerships Manager",
      department: "Partnerships",
      location: "London, UK",
      type: "Full-time",
      salary: "£45,000 - £55,000",
      description:
        "Build and maintain relationships with universities and educational institutions worldwide.",
      requirements: [
        "Master's degree preferred",
        "5+ years experience in partnership development",
        "Strong negotiation skills",
        "International business experience",
      ],
      responsibilities: [
        "Develop new university partnerships",
        "Negotiate partnership agreements",
        "Maintain existing relationships",
        "Identify new market opportunities",
      ],
    },
    {
      id: 6,
      title: "English Language Instructor",
      department: "Education",
      location: "London, UK",
      type: "Part-time",
      salary: "£25,000 - £35,000",
      description:
        "Teach English language courses to international students preparing for higher education.",
      requirements: [
        "TESOL/TEFL certification",
        "Bachelor's degree in English or related field",
        "Teaching experience preferred",
        "Patience and cultural sensitivity",
      ],
      responsibilities: [
        "Deliver English language courses",
        "Assess student progress",
        "Develop curriculum materials",
        "Provide individual tutoring support",
      ],
    },
  ];

  const departments = [
    "All",
    "Admissions",
    "Student Services",
    "Marketing",
    "Partnerships",
    "Education",
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Professional Development",
      description:
        "Continuous learning opportunities and career advancement programs",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multicultural Environment",
      description: "Work with diverse teams and students from around the world",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Meaningful Impact",
      description:
        "Help shape the future of students and make a real difference",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Education Benefits",
      description:
        "Access to courses and educational resources for personal growth",
    },
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Apply Online",
      description:
        "Submit your application through our online portal with your CV and cover letter.",
    },
    {
      step: "2",
      title: "Initial Review",
      description:
        "Our HR team will review your application and contact qualified candidates.",
    },
    {
      step: "3",
      title: "Interview Process",
      description:
        "Participate in interviews with hiring managers and team members.",
    },
    {
      step: "4",
      title: "Welcome Aboard",
      description:
        "Join our team and begin your journey with comprehensive onboarding.",
    },
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Briefcase className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Join Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Build a meaningful career helping students achieve their
              educational dreams and connect with opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Why Work </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a passionate team dedicated to transforming lives through
              education and creating global opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Current </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to
              advance your professional journey.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-purple-600 font-bold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.slice(0, 3).map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <Target className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all duration-300 group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Application </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process makes it easy to join our team
              and start making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((process, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-xl group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>

                {/* Connector Line */}
                {index < applicationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-black mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join our mission to transform lives through education and help
              students achieve their dreams worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                View All Positions
              </Button>
              <Button className="border-2 bg-white text-purple-600 border-white  hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Contact HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
