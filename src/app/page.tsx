'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Demo from '@/components/blocks/scroll-expansion-demo';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  description: string;
  featured?: boolean;
}

interface Gallery {
  _id: string;
  title: string;
  images: string[];
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
    fetchGallery();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        // Filter only featured products
        const featured = data.filter((product: Product) => product.featured === true).slice(0, 6);
        setProducts(featured);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        console.log('Gallery data fetched:', data);
        setGallery(data);
      } else {
        console.error('Gallery fetch failed:', response.status);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-grow -mt-16 md:-mt-20">
        <Demo />

        {/* Gallery Section */}
        {gallery && (
          <section className="py-12 md:py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  {gallery.title}
                </h2>
                {gallery.description && (
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {gallery.description}
                  </p>
                )}
              </motion.div>

              {gallery.images && gallery.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {gallery.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-lg group"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p>Gallery images coming soon...</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Featured Products Section */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our premium adhesive solutions designed for superior bonding and durability
              </p>
            </motion.div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading products...</p>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center mt-8"
                >
                  <Link href="/products">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
                      View All Products
                    </button>
                  </Link>
                </motion.div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products available</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
