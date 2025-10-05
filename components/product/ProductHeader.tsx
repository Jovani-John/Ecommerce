'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  X,
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
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

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Cart - Hidden on small mobile */}
            <button className="relative text-gray-700 hover:text-gray-900 transition hidden sm:block">
              <ShoppingCart size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Notifications - Hidden on mobile */}
            <button className="relative text-gray-700 hover:text-gray-900 transition hidden md:block">
              <Bell size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Wishlist - Hidden on mobile */}
            <button className="text-gray-700 hover:text-gray-900 transition hidden md:block">
              <Heart size={22} strokeWidth={1.5} />
            </button>

            {/* Language - Hidden on mobile */}
            <button className="hidden md:flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-gray-900 transition">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown size={14} />
            </button>

            {/* User Menu - Desktop */}
            {user ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition"
                >
                  <span className="text-xs sm:text-sm font-medium">
                    HELLO,{' '}
                    <span className="font-bold">
                      {user.name.split(' ')[0].toUpperCase()}
                    </span>
                  </span>
                  <User size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
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
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-3 sm:py-4 animate-slideDown">
            <div className="space-y-1">
              {user && (
                <div className="px-3 sm:px-4 py-2 bg-gray-50 rounded-lg mb-3">
                  <span className="text-xs sm:text-sm">HELLO, </span>
                  <span className="text-xs sm:text-sm font-bold">
                    {user.name.toUpperCase()}
                  </span>
                </div>
              )}
              
              <Link 
                href="/" 
                className="flex items-center gap-3 px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} />
                <span className="text-sm">Home</span>
              </Link>
              
              <Link 
                href="/category" 
                className="flex items-center gap-3 px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Grid size={18} />
                <span className="text-sm">Our Category</span>
              </Link>
              
              <Link 
                href="/about" 
                className="flex items-center gap-3 px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={18} />
                <span className="text-sm">About Us</span>
              </Link>
              
              <Link 
                href="/contact" 
                className="flex items-center gap-3 px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span className="text-sm">Contact Us</span>
              </Link>
              
              <Link 
                href="/faq" 
                className="flex items-center gap-3 px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle size={18} />
                <span className="text-sm">FAQs</span>
              </Link>

              {/* Mobile Quick Actions */}
              <div className="flex items-center gap-3 px-3 sm:px-4 py-3 border-t mt-2">
                <button className="relative flex items-center gap-2 text-gray-700">
                  <ShoppingCart size={20} />
                  <span className="text-sm">Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>

              {user ? (
                <div className="px-3 sm:px-4 py-2 border-t mt-2 space-y-1">
                  <Link
                    href="/dashboard"
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-2 text-sm text-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-3 sm:px-4 py-2 border-t mt-2">
                  <Link
                    href="/login"
                    className="flex items-center gap-2 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} />
                    <span className="text-sm">Login</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}