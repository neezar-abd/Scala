import { Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Mulai Dominasi <br /> Google Sekarang!
          </h2>
          <p className="text-gray-400 mb-8 text-sm max-w-md leading-relaxed">
            Siap mengembangkan bisnis Anda? Hubungi Skala untuk konsultasi gratis dan mari diskusikan bagaimana kami dapat meningkatkan peringkat dan penjualan Anda.
          </p>

          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="nizarabdurr@gmail.com"
              className="w-full bg-transparent border border-white/20 rounded-full py-3.5 pl-5 pr-28 text-white text-sm focus:outline-none focus:border-lime-400 transition-colors"
              readOnly
            />
            <a
              href="mailto:nizarabdurr@gmail.com"
              className="absolute right-2 top-2 bottom-2 bg-lime-400 text-black px-5 rounded-full font-bold text-xs hover:bg-lime-500 transition flex items-center"
            >
              Email Kami
            </a>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            Atau hubungi via WA:{' '}
            <a href="https://wa.me/6283899200333" className="text-lime-400 hover:underline">
              083899200333
            </a>
          </div>
        </div>

        {/* Image — hidden on mobile to save space */}
        <div className="hidden lg:flex justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-400/20 rounded-full blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Contact Support"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-white/10"
            />
            <div className="absolute bottom-0 right-0 bg-black p-2 rounded-full border border-white/10">
              <div className="bg-lime-400 w-11 h-11 rounded-full flex items-center justify-center text-black">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
