"use client";
import React from "react";
import { motion } from "framer-motion";
const partners = [
    {
        name: "Google",
        logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
        desc: "Strategic Partner for Cloud Infrastructure & AI Integration.",
        color: "#4285F4"
    },
    {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        desc: "Expertise in Social Integration & Advanced Ad-Tech Solutions.",
        color: "#0668E1"
    },
    {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        desc: "Certified Consulting for Scalable Serverless Architectures.",
        color: "#FF9900"
    },
    {
        name: "Adobe",
        logo: "https://www.adobe.com/federal/assets/svgs/adobe-logo.svg",
        desc: "Solution Partner for Digital Experience & Creative Workflows.",
        color: "#FF0000"
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_(2012).svg",
        desc: "Enterprise solutions for Cloud computing and Productivity.",
        color: "#737373"
    },
    {
        name: "ChatGPT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        desc: "Pioneering LLM integration for conversational AI experiences.",
        color: "#74aa9c"
    },
    {
        name: "Gemini",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
        desc: "Next-gen multimodal AI for advanced problem solving.",
        color: "#8E75FF"
    },
    {
        name: "Notebook LM",
        logo: "https://notebooklm.google/_/static/branding/v4/light_mode/notebook-logo.svg",
        desc: "Grounded AI research assistant for document synthesis.",
        color: "#1a73e8"
    },
    {
        name: "Perplexity",
        logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png",
        desc: "Direct-to-answer AI engine for real-time information.",
        color: "#20B2AA"
    },
    {
        name: "WhatsApp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
        desc: "Global communication partner for business messaging.",
        color: "#25D366"
    },
    {
        name: "Envato",
        logo: "https://assets.elements.envato.com/apps/storefront/EnvatoLogoDark-d7fdce89d7315fa71e83.svg",
        desc: "Creative assets partner for high-end digital production.",
        color: "#81B441"
    }
];
export default function Partnerships() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#56c0db] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                            Global Ecosystem
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase">
                            Our <span className="text-[#56c0db] italic">Partners.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        className="text-slate-400 text-sm font-medium max-w-xs md:text-right"
                    >
                        Collaborating with the world's leading technology providers to deliver excellence.
                    </motion.p>
                </div>

                {/* --- Partners Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                bounce: 0.4
                            }}
                            whileHover={{ y: -15 }}
                            className="relative group shadow-2xl shadow-slate-200/50 rounded-[3rem]"
                        >
                            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white group-hover:border-[#56c0db]/20">

                                {/* Logo Wrapper */}
                                <div className="h-20 w-full flex items-center justify-center mb-8">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[180px] object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <h4 className="text-xl font-black text-slate-800 mb-3 uppercase tracking-tight">
                                    {partner.name}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {partner.desc}
                                </p>

                                {/* Aesthetic Tag */}
                                <div
                                    className="mt-auto px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-500"
                                    style={{
                                        borderColor: 'transparent',
                                        backgroundColor: '#f1f5f9',
                                        color: '#64748b'
                                    }}
                                >
                                    Official Partner
                                </div>
                            </div>

                            {/* Decorative Background Glow on Hover */}
                            <div
                                className="absolute -z-10 inset-0 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                                style={{ backgroundColor: partner.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}