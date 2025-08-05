"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Star,
  CheckCircle,
  Lightbulb,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const missionPoints = [
    "To enable students to achieve their dreams and reach their potential in whatever they aim to do.",
    "To provide unparalleled academic excellence.",
    "To promote ethical practices and the development of social awareness and responsibility in all of our students.",
    "To encourage all students to aim high in whatever they do and to impose no limits on students' ambitions.",
    "To take pride in, praise, promote, and support all that is excellent in our students.",
    "To work with the highly esteemed hallmark of honesty, courage, fair play, and initiative-taking along with the teamwork of our people.",
    "To provide loving care, support, and encouragement equally to students of all backgrounds and nationalities, all races and religions.",
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for unparalleled academic excellence in everything we do.",
      color: "purple",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We maintain honesty, courage, and fair play in all our practices.",
      color: "pink",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusivity",
      description:
        "We provide equal support to students of all backgrounds, nationalities, races, and religions.",
      color: "purple",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We embrace innovative technology and learning methodology to enhance education.",
      color: "pink",
    },
  ];

  const team = [
    {
      name: "Education Advisory Team",
      role: "Qualified Professionals",
      image: "/adv.jpg",
      bio: "Selected from diverse backgrounds with specialized skills and industry experience",
    },
    {
      name: "Admission Consultants",
      role: "Expert Guidance Team",
      image: "/adm.jpg",
      bio: "Dedicated team with expertise in assessing, guiding, and recruiting students",
    },
    {
      name: "International Team",
      role: "Multicultural Advisors",
      image: "/int.jpg",
      bio: "Advisors from various nationalities ready to help find the best degree programs",
    },
  ];

  const stats = [
    {
      number: "60+",
      label: "Partner Universities",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "1000+",
      label: "Available Courses",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Success Rate",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Users className="w-6 h-6" />,
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
              <span className="text-gray-900">About </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Omniscient
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Omniscient is working with reputed Colleges and Universities in
              the UK in terms of resourcing the right people for the right place
              locally and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* About Omniscient */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="text-gray-900">Who We </span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Are
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We value honesty and welcoming service is the core of our
                  organisations. Omniscient aims to create friendly and
                  effective relations between all the stakeholders and partners.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Omniscient enables students to choose their best Institutes.
                  At The Same Time, Institutes can enrol the most appropriate
                  student for them. We provide guidance to potential students,
                  based on their desired path, previous qualification, future
                  objective, expectation, and the entry requirements of the
                  Institutes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  We advertise our partner organisations to future students and
                  recommend students on their behalf, checking suitability
                  criteria. Our education advisor is always available for our
                  partners and our clients.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/faculty.jpg"
                  alt="About Omniscient Education"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our Expert </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our members from the education guidance advisory team are
              qualified and selected from diverse backgrounds. Our team has
              specialised skills, proficiency, and industry experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-56  mx-auto object-cover border-4 border-purple-100 group-hover:border-purple-300 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Our Comprehensive Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    Career consulting and University admission services for
                    UK/EU and International Students
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    Qualified admission team with advisors from various
                    nationalities
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span className="text-gray-700">
                    Top-Up courses, Foundation, Bachelor or Master's/MBA
                    programs
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  <span className="text-gray-700">
                    Local guardian services for international students
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  <span className="text-gray-700">
                    Visa and after arrival services including Airport Pickup
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                  <span className="text-gray-700">
                    Accommodation assistance and settlement support in the UK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
              <Globe className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Omniscient is among the many other organisations, schools,
                foundations, or companies that would like to encourage students
                to pause and think about where and how they are going. To lead
                the change in our approach to growth and development, to take
                the responsibility for such change, that we want to see in the
                world around us.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to identify, encourage and nurture{" "}
                <span className="font-bold text-purple-600">
                  Leadership, Confidence, Responsibility, Teamwork, a World
                  Vision
                </span>
                , and other positive traits in students and young learners
                through innovative technology and learning methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Our Core </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div
                  className={`w-16 h-16 ${
                    value.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-pink-100 text-pink-600"
                  } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We have been recruiting EU/UK and International students for
              almost 60 UK universities and colleges which offer more than 1000
              courses.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gray-900">Ready to Start Your </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and let our expert team guide
              you towards achieving your educational dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                Get Free Consultation
              </Button>
              <Button className="border-1 border-purple-300 bg-white text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
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
