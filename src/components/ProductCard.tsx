'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface ProductCardProps {
  _id?: string;
  id?: string;
  name: string;
  price?: number;
  category: string;
  image?: string;
  images?: string[];
  video?: string;
  videos?: string[];
  description: string;
  featured?: boolean;
}

export default function ProductCard({
  name,
  price,
  category,
  image,
  images,
  video,
  videos,
  description,
  featured,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get display images - use images array if available, fallback to single image
  const displayImages = (images && images.length > 0) ? images : (image ? [image] : []);
  // Get display videos - use videos array if available, fallback to single video
  const displayVideos = (videos && videos.length > 0) ? videos : (video ? [video] : []);

  const handleWhatsAppInquiry = () => {
    const phoneNumber = '918630434973';
    const message = `Hi! I would like to know more about ${name}. Can you provide me with details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setShowModal(false);
  };

  const handleEmailInquiry = () => {
    const emailSubject = `Inquiry about ${name}`;
    const emailBody = `Hello,\n\nI would like to know more about the following product:\n\nProduct: ${name}\nCategory: ${category}\n\nPlease provide me with details and pricing.\n\nThank you!`;
    const mailtoURL = `mailto:info.rrss.co@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoURL;
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        onClick={() => setShowModal(true)}
        className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-600 transition group shadow-md hover:shadow-lg cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-40 md:h-56 lg:h-64 bg-gray-200 overflow-hidden">
          {displayImages.length > 0 && (
            <>
              <Image
                src={displayImages[currentImageIndex]}
                alt={`${name} - Image ${currentImageIndex + 1}`}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              
              {/* Image Navigation Dots */}
              {displayImages.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                  {displayImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
          {featured && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-blue-600 text-sm uppercase tracking-widest mb-2 font-semibold">
            {category}
          </p>
          <h3 className="text-darkGray text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition shadow-md w-full"
            >
              Enquire Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Inquiry Modal - Rendered as Portal */}
      {showModal && typeof document !== 'undefined' && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999] p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-gray-100 hover:bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition text-gray-600 font-bold text-lg sm:text-xl"
            >
              ✕
            </button>

            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                ⭐ Featured Product
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6 md:p-8">
              {/* Left Side - Media */}
              <div className="flex flex-col gap-4">
                {/* Images Carousel */}
                {displayImages.length > 0 && (
                  <div className="relative w-full h-48 sm:h-56 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Image
                      src={displayImages[currentImageIndex]}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Image Navigation Arrows */}
                    {displayImages.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-lg"
                        >
                          ←
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-lg"
                        >
                          →
                        </button>
                      </>
                    )}

                    {/* Image Dots */}
                    {displayImages.length > 1 && (
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                        {displayImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`h-2 rounded-full transition ${
                              index === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-2 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {displayVideos.length > 0 && (
                  <div className="space-y-2 sm:space-y-3">
                    {displayVideos.map((videoUrl, index) => (
                      <div key={index} className="rounded-xl overflow-hidden bg-black">
                        <video
                          className="w-full h-40 sm:h-56 md:h-64 bg-black"
                          controls
                          controlsList="nodownload"
                          autoPlay
                          muted
                          loop
                        >
                          <source src={videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side - Details */}
              <div className="flex flex-col gap-5">
                {/* Category & Title */}
                <div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {category}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{name}</h2>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>

                {/* Description */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Description</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppInquiry}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 sm:py-3 px-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    💬 WhatsApp Inquiry
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEmailInquiry}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 sm:py-3 px-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    ✉️ Email Inquiry
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 sm:py-3 px-4 rounded-xl transition text-sm sm:text-base"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
}
