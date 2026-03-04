export default function Team() {
  const team = [
    {
      name: 'Neezar Abdurrahman Ahnaf Abiyyi',
      role: 'Founder & SEO Strategist',
      desc: 'Pakar optimasi mesin pencari dengan pengalaman mendalam dalam membantu bisnis lokal mendominasi pasar digital melalui strategi yang terukur dan berorientasi pada hasil.',
      img: '/nizar.jpg',
    },
    {
      name: 'Zahabi Khalaf',
      role: 'Lead Developer & Creative Director',
      desc: 'Spesialis pengembangan web yang berfokus pada integrasi performa tinggi dan estetika modern untuk menciptakan pengalaman digital yang mengonversi pengunjung menjadi pelanggan setia.',
      img: '/abi.jpg',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            Tim <span className="bg-lime-400 text-black px-2 rounded-lg">Kami</span>
          </h2>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition self-start sm:self-auto">
            GABUNG BERSAMA KAMI
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {team.map((member, index) => (
            <div key={index} className="bg-[#111] p-5 md:p-6 rounded-3xl border border-white/5 hover:border-lime-400/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400/30">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-lime-400 text-black p-1 rounded-full">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-0.5">{member.name}</h3>
              <p className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-3">{member.role}</p>
              <div className="h-px w-full bg-white/10 mb-3" />
              <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
