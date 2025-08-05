"use client";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Award,
  Users,
  Star,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const featuredLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Partnership", href: "/partnership" },
    { name: "About Us", href: "/about" },
  ];

  const quickLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "Mission & Vision", href: "/about#mission" },
    { name: "International Students", href: "/services#international" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/omniscient-logo.png"
                alt="Omniscient Education"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Empowering minds through innovative education and comprehensive
              learning solutions. Building bridges to global opportunities and
              academic excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">5K+</div>
                <div className="text-xs text-gray-500">Students</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Award className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <Star className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-500">Success</div>
              </div>
            </div>
          </div>

          {/* Featured Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Featured Links
            </h3>
            <ul className="space-y-3">
              {featuredLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    156 B Green Street, Upton Park
                    <br />
                    London, E7 8JQ, U.K
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <a
                  href="tel:+442030110309"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  +44 (0) 203 0110 309
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@omniscient.org.uk"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  info@omniscient.org.uk
                </a>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <div>Mon-Fri: 9AM-6PM</div>
                  <div>Sat: 10AM-4PM</div>
                </div>
              </div>

              {/* Careers */}
              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  View Career Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Omniscient Education. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-purple-600 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
