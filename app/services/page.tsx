"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Users,
  GraduationCap,
  FileText,
  Award,
  BookOpen,
  CheckCircle,
  Plane,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comprehensive Student Support",
      description:
        "We are committed to providing a wide range of student services and offering many sources of support and advice on matters ranging from finance to exam worries.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Flexible Learning Options",
      description:
        "We provide courses to fit in with your lifestyle. Whether you're in your teens or returning to education after a long gap, our staff will provide an environment that supports your learning.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Top Value for Money",
      description:
        "We deliver excellent value for money in education to students from Britain and overseas through a combination of competitive advantages and quality driven tuition.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime London Location",
      description:
        "We offer a friendly, vibrant environment right in the buzzing heart of London. The capital's rich cultural and social life is close at hand.",
    },
  ];

  const internationalServices = [
    {
      title: "University Admission Applications",
      description:
        "We process university admission applications through our expert admission consultants to top universities in the UK, USA, Canada, Australia, Sweden, and other European countries.",
      features: [
        "Expert admission consultants",
        "Top universities in the UK, USA, Canada, Australia",
        "Coverage of European countries",
        "Almost 100% success rate",
      ],
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "Study Abroad Guidance",
      description:
        "We provide guidelines and essential information to international students who want to study abroad and assist them in gaining admission to their dream universities or colleges.",
      features: [
        "Comprehensive study abroad guidance",
        "Dream university admission support",
        "International student consultation",
        "Personalised education planning",
      ],
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Student Recruitment",
      description:
        "We work with universities to recruit highly talented students from all over the world.",
      features: [
        "Global student recruitment",
        "Talent identification and selection",
        "University partnership programs",
        "Promotion of cultural diversity",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Visa Application Processing",
      description:
        "We process visa applications on behalf of international students, handled by our experienced visa consultants in accordance with the immigration requirements of respective countries.",
      features: [
        "Experienced visa consultants",
        "Country-specific immigration requirements",
        "High success rate for visa applications",
        "Complete application support",
      ],
      icon: <Plane className="w-8 h-8" />,
    },
  ];

  const ukEuServices = [
    {
      title: "Free Admission Assessment",
      description:
        "We conduct admission assessments and manage the application process for your chosen college or university courses free of charge.",
      features: [
        "Completely free service",
        "Comprehensive admission assessment",
        "University application support",
        "Course selection guidance",
      ],
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "CV & Personal Statement Training",
      description:
        "We provide training sessions to help you build an academic and professional CV, and write a personal statement that reflects your thoughts and motivations.",
      features: [
        "Academic CV development",
        "Professional CV building",
        "Personal statement writing",
        "Individual consultation sessions",
      ],
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Interview Preparation",
      description:
        "We prepare students for admission interviews through mock sessions and targeted training before the actual interview.",
      features: [
        "Mock interview sessions",
        "Interview technique training",
        "Confidence building exercises",
        "Personalized feedback",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Free English Courses",
      description:
        "For EU and local students, we offer free English courses in London to help improve language proficiency for those whose first language is not English.",
      features: [
        "Completely free English courses",
        "London-based classes",
        "Language efficiency improvement",
        "Pathway to higher education",
      ],
      icon: <BookOpen className="w-8 h-8" />,
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive educational services designed to support your
              academic journey from application to graduation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Omniscient */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Why Choose </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Omniscient?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are so many reasons, that it's only possible to list the
              most important here:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Additional Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Dedicated academic advisers for undergraduate, postgraduate,
                    and mature students
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Career guidance and job placement assistance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Support with student finance applications
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">
                    International environment with a cosmopolitan character
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">
                    Challenging, rewarding, and exciting student experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">
                    Approachable and highly supportive staff
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Students Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">For </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                International Students
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed specifically for
              international students pursuing education abroad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {internationalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK/EU Students Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">For </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                UK/EU Students
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialised services for UK and EU students seeking higher
              education opportunities and career development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ukEuServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Additional UK/EU Support
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">
                    Student finance application assistance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700">
                    EU student transition support to UK education
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Higher education pathway planning
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">
                    Language support for non-native English speakers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us for a free consultation and let our expert team guide
              you towards your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Get Free Consultation
              </Button>
              <Button className="bg-white text-purple-600 border-2 border-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
