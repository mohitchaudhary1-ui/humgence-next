"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Metadata } from "next";

const Reveal = ({
    children,
    delay = 0,
}: {
    children: ReactNode;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
            duration: 0.6,
            delay,
            ease: "easeOut",
        }}
    >
        {children}
    </motion.div>
);

export const metadata: Metadata = {
    title: "Our Services - Humgence",
    description: "Explore the comprehensive range of digital marketing services we offer to drive your business growth and success.",
    robots: "index,follow"
};

const ServiceDetails = ({
    intro,
    details,
}: {
    intro: string;

    details: {
        label: string;
        desc: string;
    }[];
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialLimit = 2;
    const hasMore = details.length > initialLimit;
    const displayedDetails = isExpanded ? details : details.slice(0, initialLimit);

    return (
        <div className="flex flex-col h-full">
            <p className="text-sm text-slate-600 leading-relaxed mb-6 italic border-l-2 border-[#56c0db]/30 pl-4">
                {intro}
            </p>

            <div className="space-y-6 flex-grow">
                <AnimatePresence mode="popLayout">
                    {displayedDetails.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-1"
                        >
                            <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                                {item.label}:
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {hasMore && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#56c0db] hover:text-slate-900 transition-colors flex items-center gap-2"
                >
                    {isExpanded ? "Show Less —" : `Read More +`}
                </button>
            )}
        </div>
    );
};

export default function ServicesPage() {
    const serviceGroups = [
        {
            category: "Digital Growth & Consulting",
            items: [
                {
                    title: "SMM (Social Media Marketing)",
                    intro: "At Humgence, we don’t just manage accounts; we build communities. We bridge the gap between creative storytelling and data-driven growth.",
                    details: [
                        { label: "Platform Strategy", desc: "Expertise in Instagram, Facebook, LinkedIn, Snapchat, and YouTube tailored to your audience." },
                        { label: "Content Intelligence", desc: "Strategic planning, narrative copywriting, and Hashtag/Keyword SEO for maximum reach." },
                        { label: "Creative Engine", desc: "Short-form Reel concepts and visual storytelling with high-end aesthetic precision." },
                        { label: "Community Management", desc: "24/7 active engagement, reputation management, and account health audits." }
                    ],
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                    title: "Brand Consulting",
                    intro: "A brand is more than a logo—it’s a promise. We help businesses move beyond 'products' to become 'personalities'.",
                    details: [
                        { label: "Identity & Positioning", desc: "Defining your 'Why' and identifying the 'white space' where your brand can lead." },
                        { label: "Intelligence", desc: "Deep-dive Persona mapping and competitor benchmarking to find disruption opportunities." },
                        { label: "Brand Soul", desc: "Developing visual direction and a Brand Bible to serve as your single source of truth." },
                        { label: "Strategic Roadmap", desc: "Go-To-Market (GTM) planning and scalability structuring for long-term growth." }
                    ],
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                    title: "Digital Marketing",
                    intro: "At Humgence, we transcend traditional advertising. We combine technical SEO, psychological triggers, and high-performance ad strategies to turn your digital presence into a consistent revenue stream.",
                    details: [
                        {
                            label: "SEO & Intelligent Content",
                            desc: "Technical SEO, semantic keyword research for 'cluster topics', and content ecosystems including blogs and corporate videos."
                        },
                        {
                            label: "Lead Gen & CRO",
                            desc: "High-converting landing pages, value-based lead magnets, and UX audits using heatmaps to fix funnel leaks."
                        },
                        {
                            label: "Performance Campaigns",
                            desc: "Hyper-targeted Meta Ads and intent-based Google Ads with advanced retargeting to capture high-intent users."
                        },
                        {
                            label: "Data-Based Decisions",
                            desc: "Advanced analytics tracking CPA and ROAS, continuous A/B testing, and monthly jargon-free strategic reporting."
                        },
                        {
                            label: "End-to-End Solutions",
                            desc: "WhatsApp API integrations and E-commerce/Q-Commerce onboarding on platforms like Shopify and Amazon."
                        }
                    ],
                    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                }
            ]
        },
        {
            category: "Development & Engineering",
            items: [
                {
                    title: "Website Development",
                    intro: "A website should be your most effective salesperson. We build high-performance, conversion-led digital flagships.",
                    details: [
                        { label: "Shopify Excellence", desc: "Custom themes and liquid coding for digital shopping experiences that drive revenue." },
                        { label: "UI/UX & CRO", desc: "Mapping customer journeys to eliminate friction and turn browsers into buyers." },
                        { label: "SEO-Ready Structure", desc: "Sub-3-second load times and clean URL structures built into the foundation." },
                        { label: "Easy Management", desc: "Intuitive control panels giving you full autonomy over your digital assets." }
                    ],
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                {
                    title: "App Development",
                    intro: "Engineering innovation for mobile. We develop high-performance applications that solve complex business problems.",
                    details: [
                        { label: "User-Centric UI", desc: "Interfaces with zero learning curves and high-velocity performance to prevent lag." },
                        { label: "Custom Features", desc: "API integrations for WhatsApp, payment gateways, and internal automation tools." },
                        { label: "Scalable Backend", desc: "Enterprise-grade security and modern cloud infrastructure that grows with you." }
                    ],
                    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                {
                    title: "Software Development",
                    intro: "We don’t just write code; we build digital assets to solve 'unsolvable' business bottlenecks.",
                    details: [
                        { label: "Problem-First Engineering", desc: "Auditing pain points to build bespoke solutions that map to your operations." },
                        { label: "Inventory & ERP", desc: "Custom modules for tracking stock, vendors, and streamlining supply chains." },
                        { label: "System Integration", desc: "Connecting new custom tools with your existing legacy software systems." }
                    ],
                    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                }
            ]
        },
        {
            category: "Performance & Ads",
            items: [
                {
                    title: "Meta & Google Ads",
                    intro: "We engineer profitable acquisition funnels. We bridge the gap between building desire and capturing intent.",
                    details: [
                        { label: "High-ROI Planning", desc: "Objective-driven bidding aligned with your Shopify sales or B2B lead goals." },
                        { label: "Precision Targeting", desc: "Psychographic profiling and hyper-targeted retargeting to close window shoppers." },
                        { label: "Dynamic Scaling", desc: "Real-time tracking and budget management to maximize your ROAS." }
                    ],
                    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                },
                {
                    title: "SEO",
                    intro: "Paid ads win the day; SEO wins the decade. We build the organic foundation to own the search results.",
                    details: [
                        { label: "Technical Integrity", desc: "Core Web Vitals optimization and architecture cleanup for maximum 'link juice'." },
                        { label: "Topical Authority", desc: "Intent-based research for luxury fashion, banquet furniture, and niche services." },
                        { label: "Local & E-commerce", desc: "Dominating local search and optimizing product listings for Google Shopping." }
                    ],
                    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }
            ]
        },
        {
            category: "Automation & API",
            items: [
                {
                    title: "AI Automations",
                    intro: "Speed is the ultimate advantage. We build custom AI-driven ecosystems that eliminate repetitive tasks.",
                    details: [
                        { label: "Workflow Automation", desc: "Digital pipelines connecting your CRM, WhatsApp, and internal comms." },
                        { label: "Chatbots (NLP)", desc: "Smart response systems that understand context to provide 24/7 engagement." },
                        { label: "Lead Handling", desc: "Instant qualification and automated nurture sequences that adapt to user behavior." }
                    ],
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                    title: "WhatsApp Business API",
                    intro: "Email goes unread; WhatsApp has a 98% open rate. Leverage conversational commerce at scale.",
                    details: [
                        { label: "Official API Setup", desc: "Green Tick verification and multi-agent dashboard for centralized support." },
                        { label: "Smart Notifications", desc: "Automated alerts for shipping, order confirmation, and abandoned carts." },
                        { label: "Broadcast Campaigns", desc: "Interactive mass messaging with 'Buy Now' or 'Book' buttons for zero friction." }
                    ],
                    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                }
            ]
        },
        {
            category: "Creative & Immersive",
            items: [
                {
                    title: "Corporate Event Design",
                    intro: "An event is a live extension of your brand identity. We combine strategic design with seamless execution.",
                    details: [
                        { label: "Branding & Visuals", desc: "Thematic design, 3D stage architecture, and high-impact physical branding." },
                        { label: "Hype Campaigns", desc: "Interactive digital invites and teaser videos to build excitement long before the event." },
                        { label: "Event Media", desc: "On-site Reel creation, professional after-movies, and photography for PR." }
                    ],
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                    title: "Wedding Content Creation",
                    intro: "While traditional photographers capture portraits, we capture the 'vibe' for your feed.",
                    details: [
                        { label: "Real-Time Magic", desc: "Unfiltered, candid storytelling delivered within 24 hours of the celebration." },
                        { label: "Social-First Edits", desc: "Vertical cinematography (9:16) with transition mastery and beat-synced cuts." },
                        { label: "Trend Leveraging", desc: "Tailoring the latest viral audio and challenges to your unique wedding style." }
                    ],
                    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                },
                {
                    title: "360° Virtual Tours",
                    intro: "Don’t just show your space—let them experience it. HD immersive tours for showrooms and showrooms.",
                    details: [
                        { label: "4K HD Imagery", desc: "Vibrant, crystal-clear precision for Real Estate, Hotels, and Retail spaces." },
                        { label: "Google Integration", desc: "Boosting Local SEO by linking your 360 tour to your Google Business Profile." },
                        { label: "Interactive Hotspots", desc: "Info-points that allow users to click and buy or book directly within the tour." }
                    ],
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                },
                {
                    title: "Professional Shoot",
                    intro: "In a digital-first world, your imagery is your first impression. We provide end-to-end photo and video production that bridges the gap between high-art aesthetics and high-performance marketing.",
                    details: [
                        {
                            label: "Cinema-Grade Production",
                            desc: "Fashion, product, and corporate photography using 4K cinematic video to establish authority and trust."
                        },
                        {
                            label: "Marketing-Ready Creatives",
                            desc: "Vertical-first content for Reels and TikTok, designed with hooks to drive high click-through rates for ads."
                        },
                        {
                            label: "Logistics & Set Design",
                            desc: "Managing indoor studio setups and on-location lifestyle shoots, including professional styling and coordination."
                        },
                        {
                            label: "Post-Production Magic",
                            desc: "Cinematic color grading, high-end retouching, and sound design that meets international premium standards."
                        },
                        {
                            label: "Visual Storytelling",
                            desc: "Narrative-driven content starting from storyboards that align with your Brand Bible and growth roadmap."
                        }
                    ],
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
            ]
        }
    ];

    return (
        <>
        
        <div className="bg-[#f8fafc] text-[#1e293b]">


            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {serviceGroups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-16">
                        <Reveal>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border-l-4 border-[#56c0db] pl-6">
                                {group.category}
                            </h2>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {group.items.map((service, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="group bg-white px-8 py-10 h-full rounded-[3rem] border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-[#56c0db]/30 transition-all duration-500 flex flex-col">
                                        <div className="flex items-center gap-5 mb-10">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#56c0db]/10 transition-colors">
                                                <svg className="w-7 h-7 text-slate-400 group-hover:text-[#56c0db] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tighter leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <ServiceDetails intro={service.intro} details={service.details} />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <section className="bg-[#56c0db] py-32 px-6 text-center">
                <Reveal>
                    <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
                        Bridge the gap <br /> between creative <br /> & growth.
                    </h2>
                    <a href="/contact" className="bg-white text-[#56c0db] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-xl">
                        Contact us
                    </a>
                </Reveal>
            </section>
        </div>
        </>
    );
}   