"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Privacy </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              This policy explains how Omniscient Education collects, uses,
              stores, and protects your personal information in compliance with
              UK GDPR and the Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>

      {/* About Omniscient */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. Introduction
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Omniscient Education (“we”, “us”, “our”) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal data when you
              visit our website at
              <a
                href="https://omniscient.org.uk"
                className="text-blue-600 underline ml-1"
              >
                https://omniscient.org.uk
              </a>
              . We process your data in accordance with the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. Personal Data We Collect
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may collect the following types of personal data:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Contact details: name, email address, phone number</li>
              <li>
                Usage data: IP address, browser type, time zone, pages visited
              </li>
              <li>
                Inquiry data: information you submit through contact forms or
                emails
              </li>
              <li>Technical data: cookies and analytics</li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              3. How We Use Your Data
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We process your data to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Respond to your inquiries</li>
              <li>Deliver services you request</li>
              <li>Improve our website and user experience</li>
              <li>Send updates and marketing (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Legal Bases for Processing
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We rely on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Consent (where applicable)</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>
                Legitimate interests (e.g., website improvement, marketing to
                existing users)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              5. Sharing Your Data
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may share your data with:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>
                Trusted third-party service providers (e.g., email, IT,
                analytics)
              </li>
              <li>Regulatory bodies or legal authorities when required</li>
              <li>Business partners, in cases of mergers or acquisitions</li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              We never sell your data.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. Cookies & Analytics
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Maintain site functionality</li>
              <li>Understand user behavior via tools like Google Analytics</li>
              <li>Enhance performance and content relevance</li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              You may control cookies through your browser settings.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              7. Data Retention
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We retain your data only as long as necessary for the purposes
              outlined here, or as required by law.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              8. Your Rights
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Access the data we hold about you</li>
              <li>Request correction or deletion</li>
              <li>Object to processing or request restriction</li>
              <li>Withdraw consent at any time</li>
              <li>
                Lodge a complaint with the Information Commissioner’s Office
                (ICO)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">9. Security</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use technical and organisational measures to secure your data,
              including encryption, firewalls, and access control.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              10. International Transfers
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If we transfer your data outside the UK, we ensure appropriate
              safeguards (e.g., Standard Contractual Clauses) are in place.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              11. Changes to This Policy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may update this Privacy Policy. The latest version will always
              be posted on our website, with the "Effective Date" updated
              accordingly.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              12. Contact Us
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have questions or concerns about this policy or your
              personal data, please contact:
              <br />
              <br />
              <strong>Omniscient Education</strong>
              <br />
              156 B Green Street
              <br />
              Upton Park
              <br />
              London, E7 8JQ, U.K
              <br />
              📞 +44 (0) 203 0110 309
              <br />
              ✉️{" "}
              <a
                href="mailto:info@omniscient.org.uk"
                className="text-blue-600 underline"
              >
                info@omniscient.org.uk
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
