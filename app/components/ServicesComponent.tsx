"use client";

import { motion } from "framer-motion";

export default function ServicesComponent() {
    const featuredServices = [
        {
            title: "Social Media Marketing",
            desc: "Maximum engagement through Instagram, Facebook, and LinkedIn strategy.",
            details: ["Reel & Post Concepts", "Community Handling", "Performance Insights"],
            path: "/services/social-media"
        },
        {
            title: "Brand Consulting",
            desc: "Architecting your identity, market fit, and long-term growth roadmap.",
            details: ["Identity & Positioning", "Audience Research", "Visual Direction"],
            path: "/services/branding"
        },
        {
            title: "Website Development",
            desc: "Responsive, high-speed, and SEO-ready digital platforms.",
            details: ["UI/UX Focused", "Easy Backend", "Custom Landing Pages"],
            path: "/services/web-dev"
        },
        {
            title: "AI Automations",
            desc: "Smart workflow and chatbot systems to reduce manual work.",
            details: ["Workflow Automation", "Lead Handling", "Custom AI Solutions"],
            path: "/services/ai"
        }
    ];

    return (
        <section className="relative bg-[#020617] py-28 px-6 sm:px-12 lg:px-20 overflow-hidden">

  {/* background glow */}
  <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#56c0db] blur-[180px] opacity-10" />
  <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white blur-[220px] opacity-5" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* HEADER */}
    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-10">

      <div className="max-w-2xl space-y-6">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-[#56c0db]">
          Featured Expertise
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
          Our <span className="text-[#56c0db]">Services</span>
        </h2>

        <p className="text-white/50 max-w-md text-sm leading-relaxed">
          We design, build, and scale digital systems that turn brands into market leaders.
        </p>

      </div>

    </div>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

      {featuredServices.map((service, i) => (
        <div
          key={i}
          className="group relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-[#56c0db]/40"
        >

          {/* soft glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(86,192,219,0.15),transparent_60%)]" />

          {/* FRONT */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-2">

            <div>

              <div className="w-10 h-[2px] bg-[#56c0db] mb-6 group-hover:w-16 transition-all duration-500" />

              <h4 className="text-xl font-bold text-white leading-snug mb-4">
                {service.title}
              </h4>

              <p className="text-white/50 text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>

            <div className="text-xs text-white/30 uppercase tracking-[0.3em]">
              Hover to explore
            </div>

          </div>

          {/* BACK / DETAILS */}
          <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-br from-[#56c0db] to-[#3a8da1] p-8 flex flex-col justify-center">

            <h4 className="text-black text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-80">
              What we deliver
            </h4>

            <ul className="space-y-4">
              {service.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-black font-semibold text-sm leading-snug"
                >
                  <span className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>

          </div>

        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="flex justify-center">

      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative px-14 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4 overflow-hidden transition-all hover:bg-white/10"
      >

        <span className="text-white text-xs font-bold uppercase tracking-[0.35em]">
          Explore All Services
        </span>

        <div className="w-9 h-9 rounded-full bg-[#56c0db] flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
          <span className="text-black font-black">→</span>
        </div>

      </motion.a>

    </div>

  </div>
</section>
    );
}