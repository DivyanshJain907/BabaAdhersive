'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackGoogleAdsEvent } from '@/lib/googleAds';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackGoogleAdsEvent('generate_lead', {
          event_category: 'engagement',
          event_label: 'contact_form_submit',
        });
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block text-darkGray font-semibold mb-2">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white text-darkGray placeholder-gray-600 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-darkGray font-semibold mb-2">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white text-darkGray placeholder-gray-600 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-darkGray font-semibold mb-2">Your Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white text-darkGray placeholder-gray-600 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-darkGray font-semibold mb-2">Your Message</label>
        <textarea
          name="message"
          placeholder="Enter your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 bg-white text-darkGray placeholder-gray-600 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50 shadow-md"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg text-center"
        >
          Message sent successfully! We&apos;ll be in touch soon.
        </motion.div>
      )}
    </motion.form>
  );
}
