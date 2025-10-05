'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface RatingReviewsProps {
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
  ratingBreakdown: { stars: number; count: number; percentage: number }[];
}

export default function RatingReviews({
  averageRating = 0,
  totalReviews = 0,
  reviews = [],
  ratingBreakdown = [],
}: RatingReviewsProps) {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={star <= rating ? 'fill-[#C89C7C] text-[#C89C7C]' : 'fill-gray-300 text-gray-300'}
        />
      ))}
    </div>
  );

  return (
    <div className="py-8 border-t border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 relative inline-block pb-2">
        Rating & Reviews
        <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-[#C89C7C]"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr_200px] gap-8 items-start mb-12 mt-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-baseline gap-1 justify-center md:justify-start">
            <span className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-xl md:text-2xl text-gray-400">/5</span>
          </div>
<p className="hidden md:block text-sm text-gray-500 mt-1">
  {totalReviews} total ratings
</p>        </div>

        <div className="space-y-2 order-3 md:order-2">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 min-w-[28px]">
                <Star size={13} className="fill-[#D4A5A5] text-[#D4A5A5]" />
                <span className="text-sm font-medium text-gray-700">{item.stars}</span>
              </div>
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 0.6, delay: (5 - item.stars) * 0.05 }}
                  className="h-full bg-[#D4A5A5]"
                />
              </div>
              <span className="text-sm text-gray-600 min-w-[36px] text-right">
                %{item.count}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-end text-right order-2 md:order-3">
          <div className="mb-2">
            <p className="text-xs text-gray-500 mb-1">Total Reviews</p>
            <span className="text-3xl md:text-4xl font-bold text-gray-900">
              {totalReviews.toLocaleString()}
            </span>
          </div>
          <button className="mt-3 bg-[#C89C7C] hover:bg-[#B38A6A] text-white text-sm font-medium py-2.5 px-5 rounded flex items-center gap-2 transition-all">
            <span>Add Comment</span>
            <MessageSquare size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-0">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="py-4 border-t border-dashed border-gray-300 first:border-t-2 first:border-solid"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <h4 className="font-bold text-sm text-gray-900">{review.userName}</h4>
                <StarRating rating={review.rating} />
              </div>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}

        <div className="pt-6 text-center">
<button
  className="text-[#C89C7C] border border-[#C89C7C] hover:text-white hover:bg-[#C89C7C] font-medium text-sm px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
>
  View More Comments
</button>

        </div>
      </div>
    </div>
  );
}
