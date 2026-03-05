import { ArrowRight, ArrowUpRight, Search, Globe, ShoppingCart, Zap, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: '01',
      icon: Search,
      title: 'Optimasi SEO',
      impact: 'Muncul saat calon pelanggan googling bisnis Anda',
      desc: 'Tanpa SEO, Anda hanya bisa berharap pelanggan datang sendiri. Dengan SEO, Anda yang aktif menjemput mereka di hasil pencarian.',
    },
    {
      id: '02',
      icon: Globe,
      title: 'Pembuatan Website',
      impact: 'Website yang bekerja menjual bahkan saat Anda tidur',
      desc: 'Website bukan sekadar brosur online. Kami bangun halaman yang dirancang untuk mengubah kunjungan menjadi transaksi nyata.',
    },
    {
      id: '03',
      icon: Zap,
      title: 'Optimasi Kecepatan',
      impact: 'Cegah 53% pengunjung kabur karena loading lambat',
      desc: 'Setiap detik keterlambatan = kehilangan penjualan. Kami pastikan website Anda memuat secepat kilat di semua perangkat.',
    },
    {
      id: '04',
      icon: Code,
      title: 'Sistem & Automasi',
      impact: 'Aplikasi kustom untuk efisiensi bisnis & instansi',
      desc: 'Pembuatan program khusus untuk mengotomasi operasional bisnis Anda atau platform pembelajaran digital untuk instansi.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto bg-[#111] rounded-3xl p-6 md:p-10 relative overflow-hidden">
        {/* Green glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-900/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Service List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-lime-400 w-1.5 h-10" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Layanan <span className="bg-lime-400 text-black px-2 rounded-lg">Kami</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Setiap layanan dirancang dengan satu tujuan:{' '}
              <span className="text-white font-semibold">menambah omzet bisnis Anda</span>, bukan sekadar terlihat bagus.
            </p>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/5 hover:border-lime-400/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <service.icon className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-lime-400 font-mono text-xs">{service.id}</span>
                          <span className="font-semibold text-sm">{service.title}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                          {service.impact}
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Image — hidden on mobile */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="h-full w-full rounded-3xl overflow-hidden bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kami Bekerja untuk Hasil Anda"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Right: CTA Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-[#1a1a1a] p-6 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-[#222] transition">
              <p className="text-gray-400 text-sm">
                Tidak tahu kenapa website Anda sepi pengunjung?
              </p>
              <div className="flex justify-between items-end mt-6">
                <span className="font-bold text-base">Audit Gratis <br />Sekarang</span>
                <ArrowUpRight className="w-5 h-5 text-lime-400 flex-shrink-0" />
              </div>
            </div>
            <div className="bg-lime-400 text-black p-6 rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-lime-500 transition">
              <p className="text-black/70 text-sm">
                Siap ubah website jadi mesin pencetak omzet?
              </p>
              <div className="flex justify-between items-end mt-6">
                <span className="font-bold text-base">Mulai Proyek <br />Sekarang</span>
                <div className="bg-white rounded-full p-1 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
