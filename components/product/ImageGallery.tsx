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
    <div className="w-full">
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden mb-3 aspect-square">
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

        <button
          onClick={handlePrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
        >
          <ChevronLeft size={20} className="text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#C89C7C] hover:bg-[#B38A6A] rounded-full flex items-center justify-center shadow-lg transition-all"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
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

        <button
          onClick={() => setSelectedImage(3)}
          className={`relative aspect-square rounded-lg overflow-hidden flex items-center justify-center text-white font-bold text-xl border-2 transition-all ${
            selectedImage === 3
              ? 'bg-gray-800 border-gray-800'
              : 'bg-gray-900 border-gray-900 hover:bg-gray-800'
          }`}
        >
          +2
        </button>
      </div>
    </div>
  );
}