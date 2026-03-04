'use client';

import { motion } from 'motion/react';
import { TrendingUp, Users, Clock } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingUp,
    stat: '97%',
    label: 'konsumen cari bisnis lewat Google sebelum beli',
    sub: 'Kalau Anda tidak ada di sana, mereka pergi ke kompetitor.',
  },
  {
    icon: Users,
    stat: '3 detik',
    label: 'waktu loading yang membuat 53% pengunjung kabur',
    sub: 'Website lambat = iklan mahal terbuang sia-sia.',
  },
  {
    icon: Clock,
    stat: '24/7',
    label: 'website aktif menjual saat Anda tidur',
    sub: 'Bukan sekadar brosur digital — tapi mesin pencetak omzet.',
  },
];

export default function About() {
  return (
    <section className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-8 bg-lime-400 rounded-full" />
          <span className="text-lime-400 text-sm font-bold uppercase tracking-widest">Kenapa Ini Penting?</span>
        </div>

        {/* Main headline — the problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-lime-400">Optimalkan Potensi</span>{' '}
              Bisnis Lokal Anda Secara Digital
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              Indonesia punya <strong className="text-white">185 juta pengguna internet</strong> yang aktif mencari produk dan jasa setiap harinya. Bisnis yang tidak hadir secara online kehilangan peluang itu sepenuhnya — menyerahkan pelanggan gratis kepada kompetitor.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Di Skala, kami tidak sekadar membuatkan website. Kami merancang <strong className="text-white">ekosistem digital yang bekerja</strong> — website cepat, teroptimasi SEO, dan didesain untuk mengubah pengunjung menjadi pelanggan yang bayar.
            </p>
          </div>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] rounded-3xl p-6 border border-white/5 hover:border-lime-400/30 transition-colors"
            >
              <point.icon className="w-6 h-6 text-lime-400 mb-4" />
              <div className="text-3xl font-black text-white mb-1">{point.stat}</div>
              <div className="text-sm text-gray-300 font-medium mb-2">{point.label}</div>
              <div className="w-full h-px bg-white/10 mb-3" />
              <p className="text-xs text-gray-500 leading-relaxed">{point.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom image block */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-12 md:h-[380px]">
          <div className="md:col-span-7 bg-[#111] rounded-3xl overflow-hidden relative group h-56 md:h-auto">
            <img
              src="/project/proof-seo.png"
              alt="Bukti Keberhasilan SEO"
              className="w-full h-full object-cover object-top opacity-100"
            />
            <div className="absolute bottom-5 left-5 bg-lime-400 text-black px-5 py-2 rounded-xl font-bold uppercase text-sm tracking-wider">
              Fokus pada Hasil Nyata
            </div>
          </div>
          <div className="md:col-span-5 bg-[#0d0d0d] rounded-3xl p-7 flex flex-col justify-center gap-4 border border-white/5">
            <p className="text-gray-400 text-sm leading-relaxed">
              Setiap proyek kami dimulai dengan satu pertanyaan sederhana:
            </p>
            <blockquote className="text-white text-xl font-bold leading-snug border-l-4 border-lime-400 pl-4">
              "Berapa rupiah tambahan yang akan didapat klien setelah website ini online?"
            </blockquote>
            <p className="text-gray-500 text-xs leading-relaxed">
              Kalau jawabannya belum jelas, kami tidak mulai mengerjakan. Begitulah standar kami.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
