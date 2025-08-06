"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gray-900">Cookies </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Learn how Omniscient Education uses cookies to improve your
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies Policy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. What Are Cookies?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cookies are small text files placed on your device to store data
              that can be recalled by a web server. They help us remember your
              preferences and understand how you interact with our website.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. How We Use Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Enhance website functionality and user experience</li>
              <li>Analyze website traffic and visitor behavior</li>
              <li>Remember your preferences and settings</li>
              <li>
                Support marketing and advertising initiatives (if applicable)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              3. Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us analyze how
                visitors use the website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember user choices to
                improve your experience
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Used for delivering relevant
                ads (only with consent)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Managing Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You can manage or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect website
              functionality.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              5. Third-Party Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may use third-party services like Google Analytics, which place
              their own cookies to help us understand usage trends. These
              cookies are subject to their respective privacy policies.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. Changes to This Policy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may update this Cookies Policy from time to time. The latest
              version will always be available on this page with an updated
              effective date.
            </p>

            <h3 className="text-3xl font-black text-gray-900">7. Contact Us</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about this Cookies Policy, please
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
