'use client';

import Script from "next/script";
import { Header1 } from "@/components/ui/header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best adhesive for panel fixing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Baba Adhesive's Panel Glue+ is specifically designed for panel fixing. It provides strong bonding, fast setting, and weather resistance - ideal for ACP sheets, decorative panels, and architectural cladding."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Baba Adhesive for furniture manufacturing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Panel Glue+ is perfect for furniture manufacturing. It's a multi-purpose adhesive that works on wood, laminates, and various furniture materials with excellent bond strength."
      }
    },
    {
      "@type": "Question",
      "name": "What is WPC Adhesive used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WPC Adhesive is specially formulated for Wood-Plastic Composite (WPC) materials, outdoor decking, and composite applications. It's waterproof and UV resistant, making it ideal for outdoor use."
      }
    },
    {
      "@type": "Question",
      "name": "Is PVC Adhesive suitable for all types of pipes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our PVC Adhesive is specifically formulated for PVC pipes, fittings, and plastic applications. It creates strong, chemically resistant bonds perfect for plumbing and industrial applications."
      }
    },
    {
      "@type": "Question",
      "name": "How fast does Baba Adhesive set?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our adhesives are engineered for fast setting times, typically 15-30 minutes depending on the application and environmental conditions. This reduces project timelines significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Baba Adhesive in bulk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer wholesale and bulk supply options for contractors, manufacturers, and dealers. Please contact us at +91-863-043-4973 or use our quote request form for bulk pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Baba Adhesive located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Baba Adhesive is based in Moradabad, Uttar Pradesh, India. We supply adhesive products across India with fast delivery and professional technical support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide technical support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our technical team is available to help with product selection, application guidance, and troubleshooting. Contact us at info@babadhesive.com or call +91-863-043-4973."
      }
    }
  ]
};

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left font-semibold text-lg text-gray-900 hover:bg-blue-50 transition flex justify-between items-center"
      >
        <span>{question}</span>
        <span className={`transform transition ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header1 />

      {/* Hero Section */}
      <section className="relative w-full py-10 md:py-20 bg-gradient-to-r from-gray-700 via-blue-600 to-gray-700 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Get answers about Baba Adhesive products and applications
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item, index) => (
              <FAQItem
                key={index}
                question={item.name}
                answer={item.acceptedAnswer.text}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 md:mt-16 p-8 bg-blue-50 rounded-lg border-2 border-blue-200 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Didn&apos;t find your answer?</h2>
            <p className="text-gray-700 mb-6">Contact our technical team directly for personalized support</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Contact Us
              </a>
              <a
                href="tel:+918630434973"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition"
              >
                Call +91-863-043-4973
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
