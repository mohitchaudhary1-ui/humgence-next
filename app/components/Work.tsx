"use client";

import { motion } from "framer-motion";

export default function Work() {
    const fUp = {
        off: { opacity: 0, y: 50 },
        on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fLeft = {
        off: { opacity: 0, x: -80 },
        on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const view = { once: false, amount: 0.2 };
    return (
        <section className="bg-black py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                <motion.div initial="off" whileInView="on" viewport={view} variants={fLeft} className="lg:w-32">
                    <h2 className="text-7xl md:text-9xl font-black text-[#56c0db] lg:[writing-mode:vertical-lr] lg:rotate-180 uppercase tracking-tighter leading-none">
                        Work
                    </h2>
                </motion.div>

                <div className="flex-1">
                    <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="mb-20 max-w-3xl">
                        <h3 className="text-[#56c0db] font-bold tracking-[0.3em] uppercase text-sm mb-6">Strategic Leadership</h3>
                        <p className="text-2xl md:text-4xl font-black uppercase leading-tight mb-8">
                            Founded by <span className="text-white">Mohit Chaudhary</span>, driving global innovation with a team that has collaborated with <span className="text-[#56c0db]">KPMG, PwC, and SAP.</span>
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="md:col-span-2 group relative h-[500px] overflow-hidden rounded-2xl">
                            <img src="./banner.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Work" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 p-10 flex flex-col justify-end">
                                <h3 className="text-4xl font-black uppercase">Enterprise Solutions</h3>
                            </div>
                        </motion.div>
                        <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="h-[350px] overflow-hidden rounded-2xl relative group">
                            <img src="./banner.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                            <div className="absolute inset-0 p-6 flex items-end">
                                <h4 className="text-xl font-black uppercase text-white">Govt Initiatives</h4>
                            </div>
                        </motion.div>
                        <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="h-[350px] overflow-hidden rounded-2xl relative group">
                            <img src="./banner.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                            <div className="absolute inset-0 p-6 flex items-end">
                                <h4 className="text-xl font-black uppercase text-white">Tech Transformation</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}