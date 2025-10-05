'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { authService } from '@/lib/api/auth';
import ProductHeader from '@/components/product/ProductHeader';
import Breadcrumb from '@/components/product/Breadcrumb';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RatingReviews from '@/components/product/RatingReviews';
import SimilarItems from '@/components/product/SimilarItems';
import ProductFooter from '@/components/product/ProductFooter';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = authService.getToken();
    if (!token) {
      router.push('/login');
      return;
    }
    const userData = authService.getUser();
    setUser(userData);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const product = {
    id: productId,
    name: 'J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue',
    price: 300.0,
    originalPrice: 350.0,
    description:
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
      'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800',
    ],
    colors: [
      { id: 1, name: 'Red', hex: '#DC2626' },
      { id: 2, name: 'Blue', hex: '#87CEEB' },
      { id: 3, name: 'Olive', hex: '#808000' },
      { id: 4, name: 'Light Blue', hex: '#93C5FD' },
      { id: 5, name: 'Dark Gray', hex: '#374151' },
    ],
    sizes: [
      { id: 1, name: 'XS' },
      { id: 2, name: 'S' },
      { id: 3, name: 'M' },
      { id: 4, name: 'L' },
      { id: 5, name: 'XL' },
      { id: 6, name: '2XL' },
    ],
  };

  const reviews = [
    {
      id: 1,
      userName: 'Alex Doe',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '4 months ago',
    },
    {
      id: 2,
      userName: 'Alex Doe',
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '4 months ago',
    },
    {
      id: 3,
      userName: 'Alex Doe',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '4 months ago',
    },
    {
      id: 4,
      userName: 'Alex Doe',
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '4 months ago',
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 967, percentage: 70 },
    { stars: 4, count: 615, percentage: 43 },
    { stars: 3, count: 86, percentage: 5 },
    { stars: 2, count: 13, percentage: 1 },
    { stars: 1, count: 19, percentage: 1 },
  ];

  const similarProducts = [
    {
      id: 1,
      name: 'J.VER Women Dress White Solid Long Sleeve Strap Wrinkle-Free With Blue',
      price: 199,
      rating: 4.8,
      reviews: 315,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    },
    {
      id: 2,
      name: 'J.VER Women Dress White Solid Long Sleeve Strap Wrinkle-Free With Blue',
      price: 249,
      rating: 4.6,
      reviews: 200,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
    },
    {
      id: 3,
      name: 'J.VER Women Dress White Solid Long Sleeve Strap Wrinkle-Free With Blue',
      price: 299,
      rating: 4.9,
      reviews: 450,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400',
    },
    {
      id: 4,
      name: 'J.VER Women Dress White Solid Long Sleeve Strap Wrinkle-Free With Blue',
      price: 179,
      rating: 4.7,
      reviews: 280,
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400',
    },
    {
      id: 5,
      name: 'J.VER Women Dress White Solid Long Sleeve Strap Wrinkle-Free With Blue',
      price: 329,
      rating: 4.8,
      reviews: 520,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProductHeader />

      {/* Hero Banner */}
      <div className="bg-gray-100 py-16 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Product Details</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Our Category', href: '/category' },
            { label: 'Product Details' },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductInfo product={product} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <RatingReviews
            averageRating={4.5}
            totalReviews={3000}
            reviews={reviews}
            ratingBreakdown={ratingBreakdown}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <SimilarItems products={similarProducts} />
        </motion.div>
      </main>

      <ProductFooter />
    </div>
  );
}