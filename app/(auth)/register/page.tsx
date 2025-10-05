'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, Globe } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { authService } from '@/lib/api/auth';
import { RegisterData } from '@/types';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | string[]>>({});
  const [formData, setFormData] = useState<RegisterData>({
    name: '',
    email: '',
    mobile: '',
    mobile_country_code: '971',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await authService.register(formData);
      
      if (response.status && response.data) {
        authService.saveToken(response.data.token);
        authService.saveUser(response.data);
        router.push('/verify');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { errors?: Record<string, string[]>; message?: string } } };
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else if (err.response?.data?.message) {
        setErrors({ general: err.response.data.message });
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
            >
              Create Account
            </motion.h1>
            <p className="text-sm sm:text-base text-gray-600">Join us today and start shopping</p>
          </div>

          {errors.general && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs sm:text-sm"
            >
              {errors.general}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              icon={<User size={18} className="sm:w-5 sm:h-5" />}
              error={errors.name?.[0]}
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              icon={<Mail size={18} className="sm:w-5 sm:h-5" />}
              error={errors.email?.[0]}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2">
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Code
                </label>
                <div className="relative">
                  <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none sm:w-5 sm:h-5" />
                  <select
                    name="mobile_country_code"
                    value={formData.mobile_country_code}
                    onChange={handleChange}
                    className="w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                  >
                    <option value="971">+971</option>
                    <option value="20">+20</option>
                    <option value="966">+966</option>
                    <option value="965">+965</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <Input
                  label="Phone Number"
                  name="mobile"
                  type="tel"
                  placeholder="501234567"
                  value={formData.mobile}
                  onChange={handleChange}
                  icon={<Phone size={18} className="sm:w-5 sm:h-5" />}
                  error={errors.mobile?.[0]}
                  required
                />
              </div>
            </div>

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={18} className="sm:w-5 sm:h-5" />}
              error={errors.password?.[0]}
              required
            />

            <Input
              label="Confirm Password"
              name="password_confirmation"
              type="password"
              placeholder="Confirm your password"
              value={formData.password_confirmation}
              onChange={handleChange}
              icon={<Lock size={18} className="sm:w-5 sm:h-5" />}
              error={errors.password_confirmation?.[0]}
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              className="mt-4 sm:mt-6"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}