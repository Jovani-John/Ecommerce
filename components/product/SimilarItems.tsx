'use client';

import { Star, ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category?: string;
  colors?: string[];
}

interface SimilarItemsProps {
  products: Product[];
}

export default function SimilarItems({ products }: SimilarItemsProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // مضاعفة المنتجات 3 مرات عشان الـ infinite loop
  const extendedProducts = [...products, ...products, ...products];

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth / 3; // العرض الأصلي للمنتجات
    const scrollLeft = container.scrollLeft;

    // لو وصلنا للآخر، نرجع للأول
    if (scrollLeft >= scrollWidth * 2) {
      container.scrollLeft = scrollWidth;
    }
    // لو رجعنا للأول خالص، نروح للآخر
    else if (scrollLeft <= 0) {
      container.scrollLeft = scrollWidth;
    }
  };

  useEffect(() => {
    // نبدأ من النص (المجموعة التانية)
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 3;
      containerRef.current.scrollLeft = scrollWidth;
    }
  }, []);

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="py-8">
<div className="mb-6">
  <h2 className="text-lg font-bold text-gray-900 inline-block relative pb-2">
    Similar Items
    <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-[#C89C7C]"></span>
  </h2>
</div>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[220px]"
            >
              <div className="relative aspect-square bg-gray-50 mb-2 rounded-lg overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 transition-opacity">
                  <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <ShoppingBag size={14} className="text-gray-700" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Heart
                      size={14}
                      className={
                        favorites.includes(product.id)
                          ? 'fill-green-600 text-green-600'
                          : 'text-gray-700'
                      }
                    />
                  </button>
                </div>

                {product.discount && (
                  <div className="absolute top-2 left-2 bg-white px-1.5 py-0.5 rounded text-[10px] font-semibold text-gray-700">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              <div className="space-y-0.5">
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  {product.category || 'Dresses'}
                </p>

                <h3 className="text-xs font-semibold text-gray-900 line-clamp-2 leading-tight h-8">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 py-0.5">
                  <Star size={11} className="fill-[#C89C7C] text-[#C89C7C]" />
                  <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-gray-900">AED {product.price}</span>
                  {product.discount && (
                    <span className="text-[10px] text-gray-400 line-through">
                      AED {Math.round(product.price / (1 - product.discount / 100))}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 pt-0.5">
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 bg-black" />
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-300 bg-gray-400" />
                  <span className="text-[10px] text-gray-500 font-medium">+2</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#C89C7C] flex items-center justify-center hover:bg-[#B38A6A] transition-all shadow-md"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}