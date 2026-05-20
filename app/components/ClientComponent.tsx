"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Partnerships from "../components/Partners";
import Testimonials from "../components/Testimonials";


const clients = [
    { name: "Alpha power", logo: "/clients/alpha.webp" },
    { name: "Amar punjabi", logo: "/clients/amar.webp" },
    { name: "Ambrosia Grand", logo: "/clients/ambrosia.webp" },
    { name: "Arrow", logo: "/clients/arrow.webp" },
    { name: "Best Western Plus", logo: "/clients/best.webp" },
    { name: "Blaze", logo: "/clients/blaze.webp" },
    { name: "BNI", logo: "/clients/bni.webp" },
    { name: "Brew sage", logo: "/clients/brew.webp" },
    { name: "Burger company", logo: "/clients/burger.webp" },
    { name: "Club house", logo: "/clients/club.webp" },
    { name: "DK", logo: "/clients/dk.webp" },
    { name: "DM", logo: "/clients/dm.webp" },
    { name: "DPS store", logo: "/clients/dps.webp" },
    { name: "DT", logo: "/clients/dt.webp" },
    { name: "Elanora", logo: "/clients/elanora.webp" },
    { name: "General estates", logo: "/clients/general.webp" },
    { name: "Glued playground", logo: "/clients/glued.webp" },
    { name: "Gourmet", logo: "/clients/gourmet.webp" },
    { name: "Grand heritage", logo: "/clients/grand.webp" },
    { name: "Grey group", logo: "/clients/grey.webp" },
    { name: "HK", logo: "/clients/hk.webp" },
    { name: "Imperial golf estate", logo: "/clients/imperial.webp" },
    { name: "Kanika gosain", logo: "/clients/kanika.webp" },
    { name: "Kashmir gardens", logo: "/clients/kashmir.webp" },
    { name: "KB infra", logo: "/clients/kb.webp" },
    { name: "KK hospital", logo: "/clients/kk.webp" },
    { name: "Lakehouse", logo: "/clients/lakehouse.webp" },
    { name: "Lakme salone", logo: "/clients/lakme.webp" },
    { name: "Lifecare", logo: "/clients/lifecare.webp" },
    { name: "Lumen", logo: "/clients/lumen.webp" },
    { name: "Malhotra", logo: "/clients/maljotra.webp" },
    { name: "Modern colors", logo: "/clients/mdern.webp" },
    { name: "Mehak dhand", logo: "/clients/mehak.webp" },
    { name: "Miamo", logo: "/clients/miami.webp" },
    { name: "Mindful foods", logo: "/clients/mindful.webp" },
    { name: "Moti mahal delux", logo: "/clients/moti.webp" },
    { name: "MPRO realtors", logo: "/clients/mpro.webp" },
    { name: "M Square", logo: "/clients/msquare.webp" },
    { name: "Nanda fruits", logo: "/clients/nanda.webp" },
    { name: "Nirvana", logo: "/clients/nirwana.webp" },
    { name: "Papa Joe's pizza", logo: "/clients/papa-jow.webp" },
    { name: "Punfun", logo: "/clients/punfun.webp" },
    { name: "Punjoy", logo: "/clients/punjoy.webp" },
    { name: "Rzekka resorts", logo: "/clients/rzeka.webp" },
    { name: "Sharman jain sweets", logo: "/clients/sharman.webp" },
    { name: "Singla slimming clinic", logo: "/clients/singla.webp" },
    { name: "Skinrise", logo: "/clients/skinrise.webp" },
    { name: "Technocare", logo: "/clients/techno.webp" },
    { name: "the terrace", logo: "/clients/terace.webp" },
    { name: "Terra firma realty", logo: "/clients/terra.webp" },
    { name: "Thukral fabrics", logo: "/clients/thukral.webp" },
    { name: "Vidya wings", logo: "/clients/vidya.webp" },
    { name: "Vision solutions", logo: "/clients/vision.webp" },
    { name: "Vybe", logo: "/clients/vybe.webp" },
    { name: "the Welkin Heights", logo: "/clients/welkin-heights.webp" },
    { name: "the Wilton", logo: "/clients/wilton.webp" },
    { name: "Zapp", logo: "/clients/zapp.webp" },
    { name: "Sangh", logo: "/clients/sangh.webp" },
];

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredClients = clients.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Grid Container Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Time between each card appearing
            }
        }
    };

    return (
        <>
        
        <main className="min-h-screen bg-[#fcfdfe]">
            <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6 uppercase text-[#55c0dc] tracking-tight"
                >
                    Our Clients & Partners
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
                >
                    Building lasting relationships through excellence. We've collaborated with industry leaders and innovative startups to create meaningful impact.
                </motion.p>

            </div>

            {/* --- CLIENTS GRID --- */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mx-10">
                    <AnimatePresence mode="popLayout">
                        {filteredClients.map((client) => (
                            <motion.div
                                layout
                                key={client.name}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-2xl hover:border-[#56c0db]/10 transition-all duration-500 relative overflow-hidden mb-5">

                                    {/* Logo Reveal Animation */}
                                    <div className="w-full h-full relative z-10">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200x100?text=Logo"; }}
                                        />
                                    </div>

                                    {/* Background Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#56c0db]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45 translate-x-full group-hover:translate-x-[-100%]" />

                                    {/* Name Badge */}
                                    <div className="absolute bottom-6">
                                        <span className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-lg">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* --- EMPTY STATE --- */}
                {filteredClients.length === 0 && (
                    <div className="text-center py-32 text-slate-300 font-bold uppercase tracking-widest text-sm">
                        No match found for "{searchTerm}"
                    </div>
                )}
                <Testimonials />
            </div>
            <Partnerships />
        </main>
        </>
    );
}