'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Baba Adhesive",
  "description": "Baba Adhesive is a premium industrial adhesive manufacturer in Moradabad, specializing in high-quality adhesive solutions for construction, furniture, and industrial applications.",
  "publisher": {
    "@type": "Organization",
    "name": "Baba Adhesive",
    "logo": "https://www.babadhesive.com/logo.png"
  }
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <Header1 />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 bg-gradient-to-r from-gray-700 via-blue-600 to-gray-700 text-white px-4 -mt-0 md:-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            About Baba Adhesive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-300"
          >
            Premium Industrial Adhesive Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-gray-300 mt-3 md:mt-4"
          >
            High-quality adhesive and glue manufacturer for panel fixing, furniture work, 
            laminates, and industrial applications.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-16"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-darkGray mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
                Baba Adhesive is a premium manufacturer of industrial-grade adhesive products serving the construction, manufacturing, and furniture industries.
                We specialize in three core products: Panel Glue+ (multi-purpose adhesive), WPC Adhesive (for wood-plastic composites), and PVC Adhesive (for pipes and plastic materials).
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
                With our advanced formulations and quality assurance protocols, we supply reliable bonding solutions to contractors, manufacturers, dealers, and end-users.
                Our products are engineered for fast setting, weather resistance, and long-lasting performance across panel fixing, furniture assembly, composite decking, and industrial applications.
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                Our commitment to innovation, quality, and customer satisfaction has established Baba Adhesive as a trusted partner for professionals across India
                who demand superior bonding performance and reliability.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-blue-600 text-white p-6 md:p-8 rounded-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Why We Stand Out</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Panel Glue+ Multi-Purpose Adhesive</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>WPC Adhesive for Composites</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>PVC Adhesive for Pipes & Plastics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Fast Setting, Weather Resistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Trusted by Industry Professionals</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l-4 border-blue-600 pl-4 md:pl-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-darkGray mb-3">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-600">
                To deliver premium adhesive solutions that empower construction professionals, furniture manufacturers, and industrial enterprises.
                We are committed to innovation, quality assurance, and exceptional customer support across all our products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l-4 border-blue-600 pl-4 md:pl-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-darkGray mb-3">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-600">
                To become India&apos;s most trusted adhesive brand, recognized for superior product quality, technical expertise, and customer service.
                We aim to support our partners&apos; growth through continuous innovation in bonding technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 bg-cream">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-darkGray mb-8 md:mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { title: 'WPC Decking & Composites', description: 'Specialized WPC adhesive for composite outdoor applications' },
              { title: 'PVC Installation', description: 'Professional PVC adhesive for pipes, fittings, and sheets' },
              { title: 'Panel Fixing & ACP Work', description: 'Panel Glue+ for architectural panels and cladding' },
              { title: 'Furniture Manufacturing', description: 'Multi-purpose adhesive for furniture assembly and woodworking' },
              { title: 'Construction Projects', description: 'Industrial-grade adhesive for building and renovation work' },
              { title: 'Interior Design & Laminates', description: 'Waterproof bonding for laminate installation and veneering' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
