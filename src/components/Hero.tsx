'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Menu, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative bg-white text-black rounded-b-[2.5rem] overflow-hidden pb-12 pt-20 px-5 md:px-8 lg:px-16">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 px-5 md:px-8 py-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-xl relative z-50">
          <span className="text-lime-400 text-lg font-black">✦</span> Skala
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">Tentang Kami</div>
          <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer">Layanan</div>
          <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer">Proyek</div>
          <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer">Kontak</div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 relative z-50 bg-black text-white rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-5 right-5 bg-black text-white p-5 rounded-2xl shadow-xl flex flex-col gap-4 text-center z-40 md:hidden border border-white/10"
            >
              <div className="font-medium p-2 hover:bg-white/10 rounded-lg cursor-pointer">Tentang Kami</div>
              <div className="font-medium p-2 hover:bg-white/10 rounded-lg cursor-pointer">Layanan</div>
              <div className="font-medium p-2 hover:bg-white/10 rounded-lg cursor-pointer">Proyek</div>
              <div className="font-medium p-2 hover:bg-white/10 rounded-lg cursor-pointer text-lime-400">Kontak</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── DESKTOP: 3-column grid ── MOBILE: stacked ── */}
      <div className="max-w-7xl mx-auto">

        {/* Heading — full width, centered on both */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-tight tracking-tight text-center mb-8"
        >
          Bisnis Lokal Sepi? <br />
          <span className="text-lime-400">Siap Tampil</span> Lebih Baik di Google        </motion.h1>

        {/* 3-col grid on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Left — description + CTA */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Setiap hari tanpa website yang optimal, ratusan calon pelanggan mencari bisnis seperti Anda di Google — dan menemukan kompetitor Anda. Kami hentikan itu sekarang.
            </p>
            <div className="flex gap-3">
              <button className="bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-lime-500 transition">
                Gaspol Sekarang
              </button>
              <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                Lihat Hasil
              </button>
            </div>
            <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors">
              Cek Potensi Bisnis
            </button>
          </div>

          <div className="md:col-span-6 flex justify-center relative order-first md:order-none">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Skala Bisnis"
              className="w-72 h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[28rem] object-cover rounded-t-full rounded-b-full mx-auto border-4 border-white shadow-xl"
            />
          </div>

          {/* Right — stats badge */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <div className="flex text-lime-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold">Partner</h3>
            <p className="text-gray-500 text-sm italic">Tumbuh Bersama Bisnis Anda</p>
          </div>
        </div>
      </div>

      {/* Floating star decoration */}
      <div className="absolute top-24 left-4 text-lime-400 animate-spin-slow hidden md:block">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
    </section>
  );
}
