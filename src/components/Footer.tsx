import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black px-4 md:px-8 pb-8">
      <div className="bg-lime-400 rounded-3xl p-7 md:p-12 text-black">
        <div className="flex flex-col gap-8 mb-10 md:flex-row md:justify-between md:items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Skala</h2>
            {/* Links — 2 col grid on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-sm">
              <div>
                <h3 className="font-bold mb-3 uppercase tracking-wider opacity-60 text-xs">Perusahaan</h3>
                <ul className="space-y-1.5">
                  <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                  <li><a href="#" className="hover:underline">Tim Kami</a></li>
                  <li><a href="#" className="hover:underline">Karir</a></li>
                  <li><a href="#" className="hover:underline">Kontak</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 uppercase tracking-wider opacity-60 text-xs">Layanan</h3>
                <ul className="space-y-1.5">
                  <li><a href="#" className="hover:underline">Audit SEO</a></li>
                  <li><a href="#" className="hover:underline">Desain Web</a></li>
                  <li><a href="#" className="hover:underline">Toko Online</a></li>
                  <li><a href="#" className="hover:underline">Konten</a></li>
                  <li><a href="#" className="hover:underline">Iklan PPC</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 uppercase tracking-wider opacity-60 text-xs">Legal</h3>
                <ul className="space-y-1.5">
                  <li><a href="#" className="hover:underline">Privasi</a></li>
                  <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
                  <li><a href="#" className="hover:underline">Cookie</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 uppercase tracking-wider opacity-60 text-xs">Kontak</h3>
                <ul className="space-y-1.5">
                  <li><a href="mailto:nizarabdurr@gmail.com" className="hover:underline break-all text-xs">nizarabdurr@gmail.com</a></li>
                  <li><a href="https://wa.me/6283899200333" className="hover:underline">083899200333</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto md:max-w-xs">
            <h3 className="font-bold mb-2 uppercase tracking-wider opacity-60 text-xs">Tips SEO Gratis</h3>
            <p className="text-sm mb-3">Berlangganan newsletter kami untuk strategi SEO terbaru.</p>
            <div className="bg-white/20 p-1 rounded-full flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="bg-transparent flex-1 px-4 py-2 text-black placeholder-black/50 focus:outline-none text-sm min-w-0"
              />
              <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-black hover:text-white transition flex-shrink-0">
                Langganan
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>Hak Cipta © 2024 Skala. Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-100" />
            <Twitter className="w-4 h-4 cursor-pointer hover:opacity-100" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:opacity-100" />
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-100" />
          </div>
        </div>
      </div>
    </footer>
  );
}
