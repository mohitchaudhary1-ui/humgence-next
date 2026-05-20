"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
        dataLayer: unknown[];

        fbq: {
            (...args: unknown[]): void;

            queue?: unknown[];

            loaded?: boolean;

            version?: string;

            callMethod?: (
                ...args: unknown[]
            ) => void;
        };

        _fbq: typeof window.fbq;
    }
}
export default function Header() {
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
// Reset loader when pathname changes (navigation)
    useEffect(() => {
        setLoading(true);
    }, [pathname]);

    // Google Tag Manager Script Injection
    // Google Tag Manager
useEffect(() => {
    const gtmId = "GTM-N9R32SJ6";

    if (window.dataLayer) return;

    window.dataLayer = [];

    window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
    });

    const script =
        document.createElement("script");

    script.async = true;

    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

    document.head.appendChild(script);
}, []);
    // Meta Pixel Script Injection
   // Facebook Pixel
useEffect(() => {
    const pixelId = "1309300884362611";

    // Prevent duplicate loading
    if (typeof window.fbq === "function") return;
    const fbq = function (
        ...args: unknown[]
    ) {
        if (fbq.callMethod) {
            fbq.callMethod(...args);
        } else {
            fbq.queue?.push(args);
        }
    } as Window["fbq"];

    fbq.queue = [];

    fbq.loaded = true;

    fbq.version = "2.0";

    window.fbq = fbq;

    window._fbq = fbq;

    // Inject script
    const script =
        document.createElement("script");

    script.async = true;

    script.src =
        "https://connect.facebook.net/en_US/fbevents.js";

    document.head.appendChild(script);

    // Init pixel
    window.fbq("init", pixelId);

    window.fbq("track", "PageView");

    // Noscript fallback
    if (
        !document.getElementById(
            "fb-pixel-noscript"
        )
    ) {
        const noscript =
            document.createElement(
                "noscript"
            );

        noscript.id =
            "fb-pixel-noscript";

        noscript.innerHTML = `
            <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
            />
        `;

        document.head.appendChild(
            noscript
        );
    }
}, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, pathname]);
const easing: [number, number, number, number] = [
    0.16,
    1,
    0.3,
    1,
];
    const menuVariants = {
        closed: { opacity: 0, y: "-100%" },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easing }
        }
    };

    const linkVariants: Variants = {
    closed: {
        opacity: 0,
        x: -20,
    },

    open: (i: number) => ({
        opacity: 1,
        x: 0,

        transition: {
            delay: 0.3 + i * 0.1,
            duration: 0.5,
        },
    }),
};

    if (loading) return (
        <div className="fixed inset-0 bg-[#0a0f1a] flex flex-col items-center justify-center z-[100]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                <img src="./logo.png" alt="logo" className="w-16 sm:w-24 animate-pulse" />
                <span className="mt-6 text-xl tracking-[0.4em] font-black text-white uppercase">HUMGENCE</span>
            </motion.div>
        </div>
    );

    return (
        <>
            {/* Header - Added z-[100] to ensure it stays above the menu overlay */}
            <header className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 px-6 lg:px-12 py-4 bg-black/80 backdrop-blur-md`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center font-black text-xl tracking-tighter uppercase relative z-[110]">
                        <img src="/logo.png" alt="logo" className="w-8 md:w-10 mr-3" />
                        <span className="xs:block">HUM<span className="text-[#56c0db]">GENCE</span></span>
                    </Link>

                    {/* Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center gap-3 relative z-[110] outline-none"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-[#56c0db] transition-colors">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="flex flex-col gap-1.5 w-6 md:w-8 items-end">
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-full rotate-45 translate-y-[8px] bg-[#56c0db]" : "w-full"}`} />
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-full"}`} />
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-full -rotate-45 -translate-y-[8px] bg-[#56c0db]" : "w-full"}`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#0a0f1a] z-[90] flex items-center px-6 md:px-24 pt-24 pb-12 overflow-y-auto"
                    >
                        {/* Background Text - Scaled down for mobile */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02] flex items-center justify-center">
                            <h2 className="text-[20vw] font-black uppercase text-white leading-none rotate-90 lg:rotate-0">HUMGENCE</h2>
                        </div>

                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center relative z-10">

                            {/* Navigation Links - Smaller font on mobile to prevent overflow */}
                            <nav className="flex flex-col space-y-2 md:space-y-4">
                                {[
                                    { label: "Home", path: "/" },
                                    { label: "About", path: "/about" },
                                    { label: "Blog", path: "/blog" },
                                    { label: "Advisory Board", path: "/advisory-board" },
                                    { label: "Services", path: "/services" },
                                    { label: "Team", path: "/team" },
                                    { label: "Clients and Partners", path: "/clients" },
                                    { label: "Contact", path: "/contact" },
                                ].map((item, i) => (
                                    <motion.div key={item.label} custom={i} variants={linkVariants}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-1xl md:text-1xl lg:text-2xl font-black uppercase text-white hover:text-[#56c0db] transition-all duration-300 inline-block"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Contact Info Column - Hidden on very small height screens or spaced differently */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="lg:border-l lg:border-white/10 lg:pl-16 space-y-8 md:space-y-12"
                            >
                                <div className="xs:block">
                                    <h4 className="text-[10px] tracking-[0.5em] uppercase font-black text-[#56c0db] mb-4">Address</h4>
                                    <p className="text-[10px] md:text-2xl text-white/80 font-medium leading-relaxed">
                                        India : SCO 140, 4 Floor, Firoz Gandhi Market, Jila Kacheri Area, Model Gram, 141001,<br />
                                        Ludhiana, India
                                    </p>
                                    <p className="text-[10px] md:text-2xl text-white/80 font-medium leading-relaxed">
                                        Dubai : AlKazim Tower, Business Central, Dubai Internet City, Sheikh Zayed Road, Dubai, UAE
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] tracking-[0.5em] uppercase font-black text-[#56c0db] mb-2">Inquiries</h4>
                                    <a href="mailto:info@humgence.com" className="block text-xl md:text-2xl text-white hover:text-[#56c0db] transition-colors break-words">info@humgence.com</a>
                                    <div className="flex flex-col gap-2 text-white/60 text-base md:text-lg">
                                        <a href="tel:+917508400002" className="hover:text-white transition-colors">+91 7508400002</a>
                                        <a href="tel:+971585066985" className="hover:text-white transition-colors">+971 58 506 6985</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}