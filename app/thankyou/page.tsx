"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYou() {
    // Trigger Meta Pixel "Lead" event when this page loads
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
         
        <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center px-6">
            {/* Background Decorative Text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] flex items-center justify-center">
                <h2 className="text-[25vw] font-black uppercase text-white leading-none">SUCCESS</h2>
            </div>

            <div className="max-w-2xl w-full text-center relative z-10 mt-20">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-20 h-20 bg-[#56c0db]/10 rounded-full flex items-center justify-center border border-[#56c0db]/30">
                        <svg className="w-10 h-10 text-[#56c0db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase mb-4 tracking-tighter"
                >
                    Thank <span className="text-[#56c0db]">You</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-white/60 font-medium mb-12 leading-relaxed"
                >
                    Your inquiry has been received. Our team will analyze your
                    requirements and get back to you within 24 hours.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="px-8 py-4 bg-[#56c0db] text-[#0a0f1a] font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all duration-300"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all duration-300"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 pt-8 border-t border-white/5"
                >
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">
                        Immediate Assistance? <a href="tel:+917508400002" className="text-[#56c0db] hover:underline">Call Us</a>
                    </p>
                </motion.div>
            </div>
        </div>
        </>
    );
}