'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Heart, ChevronDown, Lock } from 'lucide-react';

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    colors: { id: number; name: string; hex: string }[];
    sizes: { id: number; name: string }[];
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[2]?.id || product.colors[0]?.id);
  const [selectedSize, setSelectedSize] = useState('2Xl');
  const [selectedType, setSelectedType] = useState('Cotton');
  const [quantity, setQuantity] = useState(1);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const types = ['Cotton', 'Polyester', 'Blend'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2Xl'];

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') setQuantity((prev) => prev + 1);
    else if (type === 'decrement' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-10 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <span className="inline-block px-3 py-1 text-[#C89C7C] border border-[#C89C7C] text-xs sm:text-sm font-medium rounded-full bg-white">
          T-Shirt
        </span>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center transition">
            <Share2 size={18} className="text-gray-600" />
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center transition">
            <Heart size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
        {product.name}
      </h1>

      {/* Price */}
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-lg sm:text-xl text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-gray-500 text-xs sm:text-sm mb-6">This price is exclusive of taxes</p>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Type Selector */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-900 mb-2">Type</label>
        <div className="relative">
          <button
            onClick={() => setIsTypeOpen(!isTypeOpen)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md flex items-center justify-between hover:border-gray-400 transition bg-white text-sm"
          >
            <span>{selectedType}</span>
            <ChevronDown
              size={18}
              className={`text-gray-500 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isTypeOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsTypeOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
                >
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setIsTypeOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition text-sm"
                    >
                      <span className={selectedType === type ? 'font-semibold text-gray-900' : 'text-gray-700'}>
                        {type}
                      </span>
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Size Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">Size</label>
        <div className="relative">
          <button
            onClick={() => setIsSizeOpen(!isSizeOpen)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md flex items-center justify-between hover:border-gray-400 transition bg-white text-sm"
          >
            <span>{selectedSize}</span>
            <ChevronDown
              size={18}
              className={`text-gray-500 transition-transform ${isSizeOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isSizeOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsSizeOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
                >
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setIsSizeOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition text-sm"
                    >
                      <span className={selectedSize === size ? 'font-semibold text-gray-900' : 'text-gray-700'}>
                        {size}
                      </span>
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Colors</label>
        <div className="flex gap-2.5 flex-wrap mb-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all ${
                selectedColor === color.id
                  ? 'ring-2 ring-gray-900 ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
              }`}
            >
              <div
                className="w-full h-full rounded-full border border-gray-200"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-900 font-medium">
          {product.colors.find((c) => c.id === selectedColor)?.name || 'Blue'}
        </p>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Quantity{' '}
          <span className="text-gray-500 font-normal text-xs">
            (${product.price.toFixed(2)} for Piece)
          </span>
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden self-start sm:self-auto">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="w-10 h-10 sm:w-11 sm:h-11 hover:bg-gray-50 transition text-gray-600 text-xl flex items-center justify-center disabled:opacity-50"
              disabled={quantity <= 1}
            >
              −
            </button>
            <div className="w-12 sm:w-14 h-10 sm:h-11 font-medium text-gray-900 border-x border-gray-300 text-center flex items-center justify-center text-base">
              {quantity.toString().padStart(2, '0')}
            </div>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="w-10 h-10 sm:w-11 sm:h-11 hover:bg-gray-50 transition text-gray-600 text-xl flex items-center justify-center"
            >
              +
            </button>
          </div>

          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </span>

          <button className="w-full sm:w-[190px] bg-[#C89C7C] hover:bg-[#B38A6A] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm">
            <span className="text-sm">Add To Cart</span>
            <Lock size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
