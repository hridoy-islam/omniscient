"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Terms & </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              These terms govern your use of the Omniscient Education website
              and services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. Acceptance of Terms
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              By accessing or using our website, you agree to be bound by these
              Terms & Conditions. If you do not agree, please do not use our
              website.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. Changes to Terms
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Updated
              versions will be posted on our website with the revised effective
              date.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              3. Use of the Website
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You agree to use the website for lawful purposes only. You must
              not:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or illegal content</li>
              <li>
                Attempt to gain unauthorized access to the website or its
                systems
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Intellectual Property
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              All content on this site is the property of Omniscient Education
              or its licensors. You may not copy, reproduce, or distribute any
              content without prior written consent.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              5. Limitation of Liability
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are not liable for any indirect, incidental, or consequential
              damages arising from your use of the website. The website is
              provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. Third-Party Links
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their content or privacy practices. Visiting these
              sites is at your own risk.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              7. Termination
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to our
              website at our discretion, without notice, for conduct that we
              believe violates these terms.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              8. Governing Law
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              These Terms & Conditions are governed by and construed in
              accordance with the laws of England and Wales. Disputes shall be
              subject to the exclusive jurisdiction of the courts of England.
            </p>

            <h3 className="text-3xl font-black text-gray-900">9. Contact Us</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact:
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
