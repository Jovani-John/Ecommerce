'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, ShoppingCart, Star, ChevronRight, Menu, Search } from 'lucide-react';

export default function MobileProductView() {
  const [selectedColor, setSelectedColor] = useState(2);
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { id: 1, name: 'Red', hex: '#DC2626' },
    { id: 2, name: 'Blue', hex: '#87CEEB' },
    { id: 3, name: 'Olive', hex: '#808000' },
    { id: 4, name: 'Light Blue', hex: '#93C5FD' },
    { id: 5, name: 'Dark Gray', hex: '#374151' },
  ];

  return (
    <div className="lg:hidden min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-[#FDB913] px-4 py-3 flex items-center justify-between">
        <button>
          <Menu className="text-white" size={24} />
        </button>
        <h1 className="text-white font-bold text-lg">T-Shirt</h1>
        <div className="flex items-center gap-3">
          <button>
            <Search className="text-white" size={20} />
          </button>
          <button>
            <Heart className="text-white" size={20} />
          </button>
        </div>
      </header>

      <div className="px-4 py-3 flex items-center gap-2 text-sm border-b">
        <span className="text-gray-600">Home</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-600">Our Category</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-900 font-medium">T-Shirt</span>
      </div>

      <div className="relative bg-gray-100 aspect-square">
        <img
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-3 flex gap-2 overflow-x-auto">
        {[1, 2, 3, 4].map((thumb) => (
          <div
            key={thumb}
            className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300"
          >
            <img
              src={`https://images.unsplash.com/photo-${
                thumb === 1 ? '1556821840-3a63f95609a7' : '1620799140408-edc6dcb6d633'
              }?w=200`}
              alt={`Thumbnail ${thumb}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white font-semibold">
          +2
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-[#FDB913] text-[#FDB913]" />
              <span className="font-semibold">4,5</span>
              <span className="text-gray-500 text-sm">/5</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">$300.00</span>
          <span className="text-lg text-gray-400 line-through">$350.00</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        </p>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Type</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option>Cotton</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Size</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option>2xl</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Colors</label>
          <div className="flex gap-3 mb-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                className={`relative w-10 h-10 rounded-full border-2 ${
                  selectedColor === color.id
                    ? 'border-gray-900 shadow-lg'
                    : 'border-gray-300'
                }`}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600">Blue</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Quantity <span className="text-gray-500 font-normal">($300.00 for 1 Piece)</span>
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-gray-100"
              >
                −
              </button>
              <input
                type="text"
                value={quantity.toString().padStart(2, '0')}
                readOnly
                className="w-12 text-center font-semibold border-x border-gray-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <span className="text-2xl font-bold text-gray-900">$300.00</span>
          </div>
        </div>

        <button className="w-full bg-[#C89C7C] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2">
          <ShoppingCart size={20} />
          Add To Cart
        </button>
      </div>

      <div className="px-4 py-6 border-t">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Rating & Reviews</h3>
        <div className="flex items-center gap-8 mb-6">
          <div>
            <div className="text-5xl font-bold text-gray-900 mb-1">4,5</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={star <= 4 ? 'fill-[#FDB913] text-[#FDB913]' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {[5, 4, 3].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <Star size={12} className="fill-[#FDB913] text-[#FDB913]" />
                <span className="text-xs">{stars}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FDB913]"
                    style={{ width: stars === 5 ? '70%' : stars === 4 ? '40%' : '10%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}