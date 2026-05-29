'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Settings {
  shopName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export default function Footer() {
  const [settings, setSettings] = useState<Settings>({
    shopName: 'Baba Adhesive',
    email: 'suneja053@gmail.com',
    phone: '+91 863 043 4973',
  });

  useEffect(() => {
    // Fetch settings from database (optional - using hardcoded values as fallback)
    // const fetchSettings = async () => {
    //   try {
    //     const response = await fetch('/api/admin/settings', {
    //       headers: { 'x-admin-secret': '1234' },
    //     });
    //     if (response.ok) {
    //       const data = await response.json();
    //       setSettings({
    //         shopName: data.shopName || 'Baba Adhesive',
    //         email: data.email || 'suneja053@gmail.com',
    //         phone: data.phone || '+91 9876543210',
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Error fetching settings:', error);
    //   }
    // };

    // fetchSettings();
  }, []);

  return (
    <motion.footer
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      className="bg-gradient-to-r from-gray-700 via-blue-600 to-gray-700 border-t border-gray-700 text-white py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <Image 
              src="/logo.png" 
              alt="Baba Adhesive Logo" 
              width={80} 
              height={80}
              className="w-16 md:w-24 h-auto mb-3 md:mb-4"
            />
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">{settings.shopName}</h3>
            <p className="text-xs md:text-sm text-gray-200">
              Premium adhesive manufacturer. Panel Glue+, WPC Adhesive, PVC Adhesive for construction, furniture, and composites.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-200">
              <li><a href="#products" className="hover:text-yellow-300 transition">Products</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
              <li><a href="/about" className="hover:text-yellow-300 transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <p className="text-xs md:text-sm text-gray-200">
              Email: {settings.email}<br />
              Phone: {settings.phone}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Industries We Serve</h4>
            <p className="text-xs md:text-sm text-gray-200">
              WPC Composites, PVC Pipes, Panel Fixing, Furniture Manufacturing, Construction, Interior Design
            </p>
          </div>
        </div>

        <div className="border-t border-blue-600 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-300">
          <p>&copy; 2026 {settings.shopName}. All rights reserved.</p>
          <p className="mt-2">
            Developed by <a href="https://www.thejainagency.shop" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">Jain Agency</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
