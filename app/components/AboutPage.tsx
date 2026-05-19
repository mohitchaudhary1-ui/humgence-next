"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Animation Variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
};



export default function AboutPage() {
    return (
        <>
         
        <div className="bg-white text-slate-900 selection:bg-[#56c0db] selection:text-white">

            {/* --- SECTION 1: WHO WE ARE --- */}
            <section className="relative bg-white py-24 md:py-30 px-6 sm:px-12 lg:px-24 overflow-hidden selection:bg-[#56c0db]/30">
                {/* Subtle Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
                    <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#56c0db] rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* --- HEADER --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-10 md:mb-10"
                    >

                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-slate-900">
                            WHO WE <span className="text-[#56c0db] italic">ARE?</span>
                        </h2>
                    </motion.div>

                    {/* --- CONTENT GRID --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
                        <div className="lg:col-span-12 xl:col-span-12 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed">
                                    We are a full-service digital marketing agency helping businesses grow through
                                    <span className="text-slate-900"> strategy, creativity and technology</span>. Our expertise spans digital marketing, performance marketing , social media marketing, brand consulting, SEO services, website development and app development and more - all designed to drive measurable online  growth.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative pl-8 border-l-4 border-[#56c0db]"
                            >
                                <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
                                    We don't just create campaigns, we build <br />
                                    <span className="bg-gradient-to-r from-[#56c0db] to-[#3a91a8] bg-clip-text text-transparent italic">
                                        scalable digital ecosystems.
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- STATS SECTION --- */}
                    <motion.div
                        variants={{
                            initial: {},
                            whileInView: { transition: { staggerChildren: 0.1 } }
                        }}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pt-20 border-t border-slate-100"
                    >
                        {[
                            { label: "Happy Clients", value: "71+" },
                            { label: "Impressions Generated", value: "90M+" },
                            { label: "Success Rate", value: "97%" },
                            { label: "Years Experience", value: "10+" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    initial: { opacity: 0, y: 30 },
                                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className="flex flex-col items-center group cursor-default text-center"
                            >
                                <span className="text-[#56c0db] text-5xl md:text-5xl font-black block mb-4 transition-transform duration-500 group-hover:-translate-y-3">
                                    {stat.value}
                                </span>
                                <div className="w-8 h-1 group-hover:w-16 group-hover:bg-[#56c0db] transition-all duration-500 mb-4" />
                                <span className=" text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight text-center md:text-left">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 2: LEADERSHIP (THE BLUE PANEL) --- */}
            <section className="relative bg-gradient-to-br from-[#56c0db] via-[#45a9c4] to-[#3a91a8] py-24 md:py-40 px-6 lg:px-24 text-white overflow-hidden">
                {/* Abstract Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full scale-150" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

                    {/* --- LEFT COLUMN: IMAGE & TITLE --- */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group w-full max-w-[280px] md:max-w-[320px] aspect-[3/4] shrink-0"
                        >
                            {/* Animated Frames */}
                            <div className="absolute -inset-4 border border-white/40 rounded-[2rem] group-hover:rotate-3 transition-transform duration-700 ease-out" />
                            <div className="absolute -inset-4 border border-white/20 rounded-[2rem] rotate-3 group-hover:-rotate-3 transition-transform duration-700 ease-out delay-75" />

                            {/* Main Image Mask */}
                            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white/10 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/30">
                                <img
                                    src="/team/mohit_humgence.png" // Replace with actual image path
                                    alt="Mohit Chaudhary - Leadership"
                                    className="w-full h-full object-cover transition-transform duration-1000 "
                                />

                                {/* Glass Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Tag (Enhanced) */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-5 shadow-2xl rounded-2xl group-hover:-translate-y-2 transition-transform duration-500"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#56c0db] rounded-full" />
                                    <div>
                                        <p className="text-[#56c0db] text-[10px] font-black uppercase tracking-widest leading-none">Founder</p>
                                        <p className="text-slate-900 font-black text-base mt-1">Mohit Chaudhary</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT COLUMN: BIO CONTENT --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-5 space-y-8 relative"
                    >
                        {/* Big Quote Mark Decoration */}
                        <span className="absolute -top-10 -left-6  text-9xl font-serif select-none">“</span>

                        <div className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                            <p>
                                At the forefront is <span className="text-white font-black underline underline-offset-4 decoration-white/30">Mohit Chaudhary</span>,
                                a strategist shaped by global consulting environments including
                                <span className="text-white font-bold"> Accenture, KPMG, PwC, SAP Labs and the Trident Group.</span>
                            </p>
                            <p className="border-l-2 border-white/20 pl-6 italic font-light text-white/80">
                                His exposure to complex business ecosystems allows him to approach digital marketing
                                with precision, foresight and long-term vision.
                            </p>

                            {/* Highlighted Quote Box */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8 group hover:bg-white/20 transition-colors">
                                <p className="font-bold text-white uppercase tracking-tight text-xl leading-tight italic">
                                    "He blends corporate-level strategic depth with modern digital agility."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Custom CSS for the stroke effect */}
                <style jsx>{`
        .stroke-text-white {
            -webkit-text-stroke: 1.5px white;
        }
    `}</style>
            </section>

            {/* --- SECTION 3: OUR APPROACH --- */}
            <section className="py-24 md:py-40 px-6 lg:px-24 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                            OUR <span className="text-[#56c0db]">APPROACH</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            As a results-driven digital growth company, we focus on customised strategies aligned with each brand's goals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Market Intelligence",
                                desc: "In-depth market and competitor research to find your unique advantage.",
                                // Search Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            },
                            {
                                title: "Performance Marketing",
                                desc: "Campaigns focused on conversion and return on investment.",
                                // Growth Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            },
                            {
                                title: "Smart Development",
                                desc: "Conversion-optimised website and app development for seamless user journeys.",
                                // Code Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            },
                            {
                                title: "SEO Excellence",
                                desc: "Search engine optimisation for organic visibility and higher rankings.",
                                // Globe Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            },
                            {
                                title: "Data Analytics",
                                desc: "Data analytics and measurable ROI tracking to refine strategy continually.",
                                // Chart Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            },
                            {
                                title: "Your Growth Partner",
                                isCTA: true,
                                desc: "We are not just a service provider; we are your long-term digital growth partner.",
                                // Bolt Icon
                                path: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`${item.isCTA ? 'bg-[#56c0db] text-white shadow-xl shadow-cyan-100' : 'bg-white text-slate-900 shadow-sm'} p-10 rounded-[2.5rem] group border border-slate-100 hover:border-[#56c0db]/50 transition-all duration-500`}
                            >
                                {/* Icon Wrapper */}
                                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ${item.isCTA ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-[#56c0db] group-hover:text-white'}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-8 h-8 ${item.isCTA ? 'text-white' : 'text-[#56c0db] group-hover:text-white'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        {item.path}
                                    </svg>
                                </div>

                                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${item.isCTA ? 'text-white/90' : 'text-slate-500'}`}>
                                    {item.desc}
                                </p>

                                {item.isCTA && (

                                    <Link
                                        href="/contact"
                                        className="mt-8 block w-full py-4 bg-white text-[#56c0db] rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 text-center"
                                    >
                                        Contact Us
                                    </Link>

                                )}

                            </motion.div>
                        ))}

                    </div>

                </div>
                <p className="text-slate-500  mx-auto text-center font-bold mt-20">
                    We are not just service provider, we are your long term digital growth partner.
                </p>
            </section>

            {/* --- SECTION 4: VISION & MISSION --- */}
            <section className="py-24 md:py-40 px-6 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">

                    <motion.div {...fadeInUp}>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                            OUR <span className="text-[#56c0db]">VISION</span>
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To become a globally recognised digital marketing and digital transformation partner,
                            empowering businesses of all sizes to thrive in the competitive online marketplace
                            through innovative, data-driven, and customer-centric solutions.
                        </p>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                            OUR <span className="text-[#56c0db]">MISSION</span>
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To deliver high-impact digital marketing, SEO, website development, app development,
                            and performance-driven strategies that generate measurable results, strengthen brand
                            identity, and drive long-term business success.
                        </p>
                    </motion.div>

                </div>
            </section>

        </div>
        </>
    );
}