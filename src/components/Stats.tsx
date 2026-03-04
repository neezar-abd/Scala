export default function Stats() {
  const stats = [
    { value: '500+', label: 'Kata Kunci Dioptimasi' },
    { value: '100+', label: 'Partner Bisnis' },
    { value: '50+', label: 'Proyek Selesai' },
    { value: '24/7', label: 'Dukungan Teknis' },
  ];

  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#111] border border-white/10 rounded-3xl px-6 py-8 grid grid-cols-2 gap-y-8 md:flex md:flex-wrap md:justify-between md:rounded-full md:px-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
