import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5">
          {/* Compact quote card — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex lg:col-span-4 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 flex-col justify-center min-h-[260px]">
            <p className="text-gray-500 text-sm mb-4">
              &quot;Skala emang beda. Trafik organik naik 300% cuma dalam 3 bulan! Orderan jadi makin lancar.&quot;
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-lime-400" />
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <div className="w-2 h-2 rounded-full bg-gray-700" />
            </div>
          </div>

          {/* Main testimonial */}
          <div className="lg:col-span-8 bg-[#111] p-6 md:p-10 rounded-3xl border border-white/5 relative">
            <Quote className="absolute top-6 right-6 text-lime-400 w-8 h-8 opacity-50" />

            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Client"
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-sm">Budi Santoso</h4>
                <p className="text-xs text-gray-400">Juragan Mebel Jepara</p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
              &quot;Dulu website sepi banget kayak kuburan. Sejak dipegang Skala, tampilan jadi keren, loading cepet, dan yang paling penting: sekarang nongol di halaman 1 Google! Mantap jiwa!&quot;
            </p>

            <div className="flex gap-3 justify-start">
              <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition text-sm">←</button>
              <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition text-sm">→</button>
            </div>
          </div>
        </div>

        {/* Scrolling banner */}
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-3 text-lg md:text-2xl font-bold uppercase text-white/80 whitespace-nowrap">
            <span>Analisis SEO</span> <span className="text-lime-400">✦</span>
            <span>Riset Kata Kunci</span> <span className="text-lime-400">✦</span>
            <span>Bangun Tautan</span> <span className="text-lime-400">✦</span>
            <span>Strategi Konten</span> <span className="text-lime-400">✦</span>
            <span>Teknis SEO</span> <span className="text-lime-400">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
