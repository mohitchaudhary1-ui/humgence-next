"use client";
import Link from "next/link";
import { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

    useEffect(() => {
        // --- GOOGLE TAG MANAGER (NOSCRIPT) INJECTION ---
        const gtmId = 'GTM-N9R32SJ6';

        // Check if the noscript already exists to avoid duplicates
        if (!document.getElementById('gtm-noscript')) {
            const noscript = document.createElement('noscript');
            noscript.id = 'gtm-noscript';

            // Create the iframe element
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
            iframe.height = "0";
            iframe.width = "0";
            iframe.style.display = "none";
            iframe.style.visibility = "hidden";

            noscript.appendChild(iframe);

            // Google recommends placing this immediately after the opening <body> tag
            document.body.insertBefore(noscript, document.body.firstChild);
        }
        // --- END GTM INJECTION ---

        // ... your existing scroll and loading logic
    }, []);
    return (
        <footer className="relative bg-[#030712] text-white overflow-hidden">

    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#56c0db]/10 blur-[120px]" />

    <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10 pb-16">

            {/* BRAND */}
            <div className="md:col-span-5">

                <Link
                    href="/"
                    className="inline-flex items-center text-2xl font-bold tracking-[-0.08em]"
                >
                    <img
                        src="./logo.png"
                        alt="logo"
                        className="w-10 mr-3"
                    />

                    <span>
                        HUM<span className="text-[#56c0db]">GENCE</span>
                    </span>
                </Link>

                <p className="mt-6 text-slate-400 leading-relaxed max-w-md text-sm">
                    We create modern digital experiences through branding,
                    content creation, websites, and creative strategy.
                </p>

                {/* SOCIALS */}
                <div className="flex gap-4 mt-8">

                    <a
                        href="https://www.facebook.com/share/1Fj6sf9MSc/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-11 h-11 rounded-full
                        border border-white/10
                        bg-white/5
                        flex items-center justify-center
                        text-slate-300
                        hover:bg-[#56c0db]
                        hover:text-black
                        hover:scale-110
                        transition-all duration-300
                        backdrop-blur-xl
                        "
                    >
                        <i className="fab fa-facebook-f text-sm"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/humgence/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-11 h-11 rounded-full
                        border border-white/10
                        bg-white/5
                        flex items-center justify-center
                        text-slate-300
                        hover:bg-[#56c0db]
                        hover:text-black
                        hover:scale-110
                        transition-all duration-300
                        backdrop-blur-xl
                        "
                    >
                        <i className="fab fa-instagram text-sm"></i>
                    </a>

                </div>
            </div>

            {/* QUICK LINKS */}
            <div className="md:col-span-3">

                <h3 className="text-sm uppercase tracking-[0.25em] text-white/50 mb-8">
                    Quick Links
                </h3>

                <ul className="space-y-5">

                    {['About', 'Services', 'Team', 'Contact'].map((link) => (

                        <li key={link}>

                            <a
                                href={`/${link.toLowerCase()}`}
                                className="
                                text-sm text-slate-300
                                hover:text-[#56c0db]
                                hover:translate-x-1
                                transition-all duration-300
                                inline-block
                                "
                            >
                                {link}
                            </a>

                        </li>

                    ))}

                </ul>
            </div>

            {/* CONTACT */}
            <div className="md:col-span-4">

                <h3 className="text-sm uppercase tracking-[0.25em] text-white/50 mb-8">
                    Contact
                </h3>

                <ul className="space-y-6 text-sm text-slate-300">

                    <li className="flex gap-4">
                        <i className="far fa-envelope text-[#56c0db] mt-1"></i>
                        <a
                            href="mailto:info@humgence.com"
                            className="hover:text-[#56c0db] transition-colors"
                        >
                            info@humgence.com
                        </a>
                    </li>

                    <li className="flex gap-4">
                        <i className="fas fa-phone-alt text-[#56c0db] mt-1"></i>
                        <div>
                            <p>India : +91 7508400002</p>
                            <p className="mt-1">Dubai : +971 585066985</p>
                        </div>
                    </li>

                    <li className="flex gap-4">
                        <i className="fas fa-map-marker-alt text-[#56c0db] mt-1"></i>

                        <div className="space-y-4">

                            <p>
                                India : SCO 140, 4th Floor, Firoz Gandhi Market,
                                Ludhiana, Punjab 141001
                            </p>

                            <p>
                                Dubai : AlKazim Tower, Business Central,
                                Dubai Internet City, UAE
                            </p>

                        </div>
                    </li>

                </ul>
            </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-xs tracking-wide">
                © 2026 Humgence. All rights reserved.
            </p>

            <div className="flex gap-6">

                <a
                    href="/privacy_policy.pdf"
                    target="__blank"
                    className="
                    text-slate-500 text-xs
                    hover:text-[#56c0db]
                    transition-colors
                    "
                >
                    Privacy Policy
                </a>

                <a
                    href="/terms_and_conditions.pdf"
                    target="__blank"
                    className="
                    text-slate-500 text-xs
                    hover:text-[#56c0db]
                    transition-colors
                    "
                >
                    Terms & Conditions
                </a>

            </div>

        </div>

    </div>
</footer>
    );
};

export default Footer;