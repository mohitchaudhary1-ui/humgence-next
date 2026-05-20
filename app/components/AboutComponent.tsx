"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function AboutComponent() {
    const view = {
        once: false,
        amount: 0.2,
    };

    const fLeft: Variants = {
        off: {
            opacity: 0,
            x: -50,
        },

        on: {
            opacity: 1,
            x: 0,

            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const fRight: Variants = {
        off: {
            opacity: 0,
            x: 50,
        },

        on: {
            opacity: 1,
            x: 0,

            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#56c0db] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/20 blur-[180px]" />

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-black/20 blur-[200px]" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
                {/* LEFT */}
                <motion.div
                    initial="off"
                    whileInView="on"
                    viewport={view}
                    variants={fLeft}
                    className="space-y-10"
                >
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs uppercase tracking-[0.3em] backdrop-blur-md">
                        About Humgence
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                        We are
                        <br />
                        Humgence
                    </h2>

                    <div className="w-20 h-[2px] bg-white/60" />

                    <h2 className="text-5xl md:text-7xl font-black text-white/90 leading-[0.9] uppercase tracking-tighter">
                        We build
                        <br />
                        Brands
                    </h2>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial="off"
                    whileInView="on"
                    viewport={view}
                    variants={fRight}
                    className="space-y-10"
                >
                    {/* Title */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-6">
                            Who We Are
                        </h3>

                        <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium">
                            We’re more than a digital agency — we’re growth
                            architects. We design branding systems, websites,
                            apps, SEO strategies, and software solutions that
                            scale businesses globally with precision and
                            performance.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                            <h4 className="text-3xl font-black text-white">
                                10+
                            </h4>

                            <p className="text-xs uppercase tracking-widest text-white/70 mt-2">
                                Years Experience
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                            <h4 className="text-3xl font-black text-white">
                                71+
                            </h4>

                            <p className="text-xs uppercase tracking-widest text-white/70 mt-2">
                                Successful Projects
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 mt-6 px-10 py-4 rounded-full bg-black text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-black/30"
                    >
                        Let&apos;s Build Together

                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}