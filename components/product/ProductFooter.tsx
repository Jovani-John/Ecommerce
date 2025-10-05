'use client';

import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductFooter() {
  return (
    <footer className="relative bg-[#B8906C] text-white pt-16 pb-8 mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/95 to-[#2A2A2A]/98" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Image 
                src="/logo.png" 
                alt="Yingralea Logo" 
                width={120} 
                height={48}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ipsum m eos qui consequatur ab cum maxime Soluta dolor quas Ipsum in eos qui 
              consequatur ab. Soluta dolor quae Ipsum in eos quaequaeque ab cum maxime Soluta 
              dolor quae
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-6 text-white">Let Us Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-gray-400 hover:text-white transition-colors text-sm">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-6 text-white">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-6 text-white">Send Email</h3>
            <div className="flex gap-2 mb-8">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8906C] focus:border-transparent"
              />
              <button className="px-5 py-2.5 bg-[#B8906C] hover:bg-[#A67D5F] text-white font-medium rounded-md transition-all text-sm whitespace-nowrap">
                Send
              </button>
            </div>
            
            <div>
              <p className="text-sm font-medium text-white mb-4">Follow Us</p>
              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <Facebook size={16} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <Twitter size={16} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <Instagram size={16} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <Linkedin size={16} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#B8906C] rounded flex items-center justify-center transition-all group"
                >
                  <Send size={16} className="text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}