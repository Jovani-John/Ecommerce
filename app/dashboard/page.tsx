'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogOut, ShoppingBag, User as UserIcon, CheckCircle } from 'lucide-react';
import { authService } from '@/lib/api/auth';
import { UserData } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser ] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = authService.getToken();
    if (!token) {
      router.push('/login');
      return;
    }

    const userData = authService.getUser ();
    setUser (userData);
    setLoading(false);

  }, [router]);

  const handleLogout = async () => {
    try {
      const token = authService.getToken();
      if (token) {
        await authService.logout(token);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      authService.clearAuth();
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold text-primary">
              Skip
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/product/1" 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <ShoppingBag size={20} />
                <span className="hidden sm:inline">Products</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut size={20} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <UserIcon size={40} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome, {user.name || 'User '}! 👋  
                </h1>
                <p className="text-gray-600">
                  Great to have you back. Let's continue shopping!
                </p>
              </div>
            </div>

            {user.email_verified_at && (
              <div className="mt-4 flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-medium">Email Verified</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/product/1"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <ShoppingBag size={24} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Browse Products</h3>
                  <p className="text-gray-600 text-sm">Explore our latest collection and details</p>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 cursor-pointer hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                  <UserIcon size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Profile Settings</h3>
                  <p className="text-gray-600 text-sm">Manage your account information</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}