'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: 'Panel Glue+ Adhesive',
      description: 'Premium multi-purpose adhesive for panel fixing, furniture assembly, and construction applications',
      features: ['High Strength Bond', 'Weather Resistant', 'Fast Setting', 'Easy Application', 'Bulk Supply']
    },
    {
      title: 'WPC Adhesive',
      description: 'Specialized adhesive for Wood-Plastic Composite (WPC) materials, decking, and outdoor applications',
      features: ['WPC Compatible', 'Waterproof Formula', 'UV Resistant', 'Long Lasting', 'Professional Grade']
    },
    {
      title: 'PVC Adhesive',
      description: 'High-performance adhesive for PVC pipes, fittings, sheets, and plastic applications',
      features: ['Strong PVC Bond', 'Chemical Resistant', 'Certified Quality', 'Volume Supply', 'Industrial Use']
    },
    {
      title: 'Panel Fixing Solutions',
      description: 'Expert adhesive solutions for ACP sheets, decorative panels, and architectural cladding',
      features: ['ACP Compatible', 'Structural Bond', 'Weatherproof', 'Quick Setting', 'Professional Finish']
    },
    {
      title: 'Custom Adhesive Formulations',
      description: 'Tailored adhesive solutions for unique manufacturing and construction requirements',
      features: ['Custom Formulas', 'Technical Support', 'Quality Testing', 'Bulk Quantities', 'Industry Certified']
    },
    {
      title: 'Technical Support & Consultation',
      description: 'Expert guidance on adhesive selection and application for optimal bonding results',
      features: ['Product Recommendation', 'Application Support', 'Quality Assurance', 'Dealer Training', 'Problem Solving']
    },
  ];

  return (
    <main className="bg-white">
      <Header1 />

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 bg-gradient-to-r from-gray-700 via-blue-600 to-gray-700 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Premium Adhesive Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-300"
          >
            WPC, PVC, Panel Glue+ & Specialized Bonding Products
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg md:text-2xl font-bold text-blue mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-12 md:py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-darkGray mb-8 md:mb-12 text-center">Why Choose Baba Adhesive Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: 'Reliability', description: 'Consistent quality and on-time delivery every single time' },
              { title: 'Expertise', description: 'Years of experience in adhesive industry and customer satisfaction' },
              { title: 'Affordability', description: 'Competitive pricing without compromising on quality' },
              { title: 'Support', description: '24/7 customer support for all your queries and concerns' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-6 rounded-lg border-l-4 border-blue"
              >
                <h3 className="text-xl font-bold text-darkGray mb-2">{item.title}</h3>
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
