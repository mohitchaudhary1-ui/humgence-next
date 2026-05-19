"use client";

import { motion } from "framer-motion";

export default function Banner() {
    const container = {
        off: {},

        on: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const item = {
        off: {
            opacity: 0,
            y: 40,
        },

        on: {
            opacity: 0.9,
            y: 0,

            transition: {
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
            {/* Background image */}
            <img
                src="/banner.webp"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover scale-125 opacity-40"
            />

            {/* Gradient atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(86,192,219,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_50%),linear-gradient(to_right,rgba(0,0,0,0.92),rgba(0,0,0,0.55),rgba(0,0,0,0.95))]" />

            {/* Noise layer */}
            <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')]" />

            {/* Light blobs */}
            <div className="absolute top-1/4 left-[-120px] w-[350px] h-[350px] bg-[#56c0db] blur-[180px] opacity-20" />

            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-white blur-[200px] opacity-10" />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                <motion.div
                    variants={container}
                    initial="off"
                    animate="on"
                >
                    {/* Badge */}
                    <motion.div
                        variants={item}
                        className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] tracking-[0.35em] uppercase text-white/60"
                    >
                        Digital Creative Studio
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={item}
                        className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white"
                    >
                        We Build
                        <br />

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] via-white to-[#56c0db]">
                            Digital Systems
                        </span>
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        variants={item}
                        className="mt-8 max-w-xl text-white/50 text-sm md:text-lg leading-relaxed tracking-wide"
                    >
                        We design digital ecosystems that elevate brands into
                        global experiences — blending strategy, design, and
                        performance.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={item}
                        className="flex flex-wrap items-center gap-5 mt-12"
                    >
                        <a
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#56c0db] text-black font-bold text-xs uppercase tracking-[0.3em] overflow-hidden"
                        >
                            <span className="relative z-10">
                                Get In Touch
                            </span>

                            <span className="absolute inset-0 bg-white translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500" />

                            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}