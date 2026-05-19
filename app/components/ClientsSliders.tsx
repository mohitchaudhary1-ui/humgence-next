"use client";
import { motion } from "framer-motion";

// This array now contains all your unique logos from the public/clients folder
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
    { name: "Papa Joe's pizza", logo: "/clients/papa jow.webp" },
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
    { name: "the Welkin Heights", logo: "/clients/welkin heights.webp" },
    { name: "the Wilton", logo: "/clients/wilton.webp" },
    { name: "Zapp", logo: "/clients/zapp.webp" },
    { name: "Sangh", logo: "/clients/sangh.webp" },
];


// Double the array to create a seamless loop
const sliderItems = [...clients];

export default function IndustryGiants() {
    return (
        <section className="py-24 bg-[#f1f5f9] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#55c0dc] font-bold tracking-[0.2em] text-xs uppercase">
                        Our Trusted Clients
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-3 mb-4">
                        Working with the <span className="text-[#55c0dc]">Industry Giants</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#55c0dc] mx-auto rounded-full" />
                </motion.div>
            </div>

            <div className="relative flex">
                {/* Gradient Fades for visual polish */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10" />

                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-50%"] }} // Slides through exactly one full set of the 58 logos
                    transition={{
                        repeat: Infinity,
                        duration: 120, // Slower duration (60s) because there are 58 items now
                        ease: "linear",
                    }}
                >
                    {sliderItems.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group flex flex-col items-center gap-4"
                        >
                            <div className="w-40 h-24 md:w-52 md:h-32 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#55c0dc]/30 group-hover:-translate-y-1">
                                <img
                                    // The "tr=w-600" automatically shrinks the 3000px image to 600px!
                                    src={`${client.logo}?tr=w-600`}
                                    alt={client.name}

                                    // You provide different "instructions" in the URL for different sizes
                                    srcSet={`
                                    ${client.logo}?tr=w-300 300w,
                                    ${client.logo}?tr=w-600 600w,
                                    ${client.logo}?tr=w-1200 1200w
                                `}

                                    sizes="(max-width: 600px) 300px, 600px"
                                    className="w-[238px] h-[109px] object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px] group-hover:text-[#55c0dc] transition-colors">
                                {client.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-16">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#55c0dc] text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#55c0dc]/30"
                >
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
}