'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [shopName, setShopName] = useState('Baba Adhesive');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/admin/settings', {
          headers: { 'x-admin-secret': '1234' },
        });
        if (response.ok) {
          const data = await response.json();
          if (data.shopName) {
            setShopName(data.shopName || 'Baba Adhesive');
          }
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="text-2xl font-bold text-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            🏭 {shopName}
          </motion.div>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-darkGray hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/#products" className="text-darkGray hover:text-blue-600 transition font-medium">
            Products
          </Link>
          <Link href="/#contact" className="text-darkGray hover:text-blue-600 transition font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
