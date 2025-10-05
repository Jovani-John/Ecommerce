'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden mb-4 aspect-square sm:aspect-[4/3] lg:aspect-[5/3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Left Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
        >
          <ChevronLeft size={18} className="text-gray-800 sm:size-20" />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#C89C7C] hover:bg-[#B38A6A] rounded-full flex items-center justify-center shadow-md transition-all"
        >
          <ChevronRight size={18} className="text-white sm:size-20" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
        {images.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-gray-400 ring-1 ring-gray-300'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* Extra Images */}
        <button
          onClick={() => setSelectedImage(3)}
          className={`relative aspect-square rounded-lg overflow-hidden flex items-center justify-center text-white font-bold text-lg sm:text-xl border-2 transition-all ${
            selectedImage === 3
              ? 'bg-gray-800 border-gray-800'
              : 'bg-gray-900 border-gray-900 hover:bg-gray-800'
          }`}
        >
          +{images.length - 3}
        </button>
      </div>
    </div>
  );
}
