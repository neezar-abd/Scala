'use client';

import { motion } from 'motion/react';

export default function PageSpeed() {
    const scores = [
        { label: 'Performa', value: 91 },
        { label: 'Aksesibilitas', value: 96 },
        { label: 'Praktik Terbaik', value: 100 },
        { label: 'SEO', value: 100 },
    ];

    const radius = 36;
    const circumference = 2 * Math.PI * radius;

    return (
        <section className="bg-[#111] py-16 px-5 border-y border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                <div className="text-center mb-10">
                    <p className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-3">Google PageSpeed Insights</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Bukan Sekadar Estetik,<br />Tapi Terbukti Super Cepat</h2>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">Kami mengedepankan performa maksimal agar website Anda selalu memimpin di mata Google.</p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-around w-full gap-8 sm:gap-4">
                    {scores.map((score, index) => {
                        const offset = circumference - (score.value / 100) * circumference;

                        return (
                            <div key={index} className="flex flex-col items-center flex-shrink-0">
                                <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                                    {/* Background Circle */}
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle
                                            cx="56"
                                            cy="56"
                                            r={radius}
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            fill="transparent"
                                            className="text-white/10"
                                        />
                                        {/* Animated Progress Circle */}
                                        <motion.circle
                                            cx="56"
                                            cy="56"
                                            r={radius}
                                            stroke="url(#gradient)"
                                            strokeWidth="6"
                                            fill="transparent"
                                            strokeDasharray={circumference}
                                            initial={{ strokeDashoffset: circumference }}
                                            whileInView={{ strokeDashoffset: offset }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#84cc16" /> {/* lime-500 */}
                                                <stop offset="100%" stopColor="#4ade80" /> {/* green-400 */}
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Score Text */}
                                    <div className="absolute flex flex-col items-center justify-center">
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                                            className="text-3xl font-black text-white"
                                        >
                                            {score.value}
                                        </motion.span>
                                    </div>
                                </div>
                                <span className="text-gray-300 text-sm font-medium">{score.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
