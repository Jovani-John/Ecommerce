'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6 bg-gray-50 px-4 py-2 rounded" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-xs"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-gray-500 text-xs' : 'text-gray-700 text-xs'}>
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight size={12} className="text-gray-400" />}
          </div>
        );
      })}
    </nav>
  );
}