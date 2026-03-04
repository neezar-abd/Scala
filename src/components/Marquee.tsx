'use client';

const items = [
  'SEO',
  'Desain Web',
  'Peringkat',
  'Trafik',
  'Konversi',
  'Pertumbuhan',
  'SEO',
  'Desain Web',
  'Peringkat',
  'Trafik',
  'Konversi',
  'Pertumbuhan',
];

export default function Marquee() {
  return (
    <section className="bg-black py-14 overflow-hidden border-y border-white/10">
      <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex shrink-0 gap-0 animate-marquee">
          {items.map((item, i) => (
            <span
              key={i}
              className={
                i % 2 === 1
                  ? 'text-lime-400 text-5xl md:text-7xl font-black mx-4 select-none'
                  : 'text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mx-8 select-none'
              }
            >
              {i % 2 === 1 ? '✦' : item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 gap-0 animate-marquee" aria-hidden>
          {items.map((item, i) => (
            <span
              key={i}
              className={
                i % 2 === 1
                  ? 'text-lime-400 text-5xl md:text-7xl font-black mx-4 select-none'
                  : 'text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mx-8 select-none'
              }
            >
              {i % 2 === 1 ? '✦' : item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
