'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ShoppingCart,
  Heart,
  Bell,
  Home,
  Grid,
  Info,
  Phone,
  HelpCircle,
  User,
  ChevronDown,
  Menu,
} from 'lucide-react';
import { authService } from '@/lib/api/auth';
import { UserData } from '@/types';

export default function ProductHeader() {
  const [user, setUser] = useState<UserData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const userData = authService.getUser();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    authService.clearAuth();
    window.location.href = '/login';
  };

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <Home size={18} />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link href="/category" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <Grid size={18} />
              <span className="text-sm font-medium">Our Category</span>
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <Info size={18} />
              <span className="text-sm font-medium">About Us</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <Phone size={18} />
              <span className="text-sm font-medium">Contact Us</span>
            </Link>
            <Link href="/faq" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <HelpCircle size={18} />
              <span className="text-sm font-medium">FAQs</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative text-gray-700 hover:text-gray-900 transition hidden md:block">
              <ShoppingCart size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              )}
            </button>

            <button className="relative text-gray-700 hover:text-gray-900 transition hidden md:block">
              <Bell size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <button className="text-gray-700 hover:text-gray-900 transition hidden md:block">
              <Heart size={22} strokeWidth={1.5} />
            </button>

            <button className="hidden md:flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-gray-900 transition">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown size={14} />
            </button>

            {user ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
                >
                  <span className="text-sm font-medium">
                    HELLO,{' '}
                    <span className="font-bold">
                      {user.name.split(' ')[0].toUpperCase()}
                    </span>
                  </span>
                  <User size={22} strokeWidth={1.5} />
                  <ChevronDown size={14} />
                </button>

                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <hr className="my-2" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
              >
                <User size={22} strokeWidth={1.5} />
              </Link>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 block"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-slideDown">
            <div className="space-y-3">
              {user && (
                <div className="px-4 py-2 bg-gray-50 rounded-lg mb-3">
                  <span className="text-sm">HELLO, </span>
                  <span className="text-sm font-bold">
                    {user.name.toUpperCase()}
                  </span>
                </div>
              )}
              <Link href="/" className="flex items-center gap-3 px-4 py-2 text-gray-700">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link href="/category" className="flex items-center gap-3 px-4 py-2 text-gray-700">
                <Grid size={18} />
                <span>Our Category</span>
              </Link>
              <Link href="/about" className="flex items-center gap-3 px-4 py-2 text-gray-700">
                <Info size={18} />
                <span>About Us</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3 px-4 py-2 text-gray-700">
                <Phone size={18} />
                <span>Contact Us</span>
              </Link>
              <Link href="/faq" className="flex items-center gap-3 px-4 py-2 text-gray-700">
                <HelpCircle size={18} />
                <span>FAQs</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
