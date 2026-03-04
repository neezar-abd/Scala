'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Geprek Mantap',
      category: 'Kuliner / Restoran',
      url: 'https://geprek-mantap.vercel.app/',
      image: '/project/webgeprekmantap.png',
      result: 'Pesanan Online Naik',
      desc: 'Website kuliner modern dengan menu digital dan sistem pemesanan untuk rumah makan geprek lokal.',
    },
    {
      id: 2,
      title: 'Kopi Nusantara',
      category: 'Kuliner / Kafe',
      url: 'https://kopi-nusantara-two.vercel.app/',
      image: '/project/kafe.png',
      result: 'Trafik Meningkat Signifikan',
      desc: 'Perancangan ulang website & katalog menu digital untuk kedai kopi dengan nuansa nusantara.',
    },
    {
      id: 3,
      title: 'Villa Nusantara',
      category: 'Properti / Penginapan',
      url: 'https://villa-nusantara.vercel.app/',
      image: '/project/villa.png',
      result: 'Booking Langsung Naik',
      desc: 'Website villa premium dengan sistem reservasi online dan tampilan galeri foto yang memukau.',
    },
  ];

  return (
    <section id="portfolio" className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Karya Kami <br />
            <span className="text-lime-400">Hasil Kerja Kami</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Kami tidak hanya membuat desain cantik, tapi solusi yang benar-benar mendatangkan cuan untuk klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10"
            >
              <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-lime-400 text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full group-hover:bg-lime-400 group-hover:text-black transition flex-shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <div className="inline-block bg-lime-400/10 text-lime-400 px-3 py-1.5 rounded-lg text-sm font-bold border border-lime-400/20">
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
