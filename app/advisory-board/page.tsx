"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const boardMembers = [
    {
        name: "KD Chaudhary",
        image: "/advisory_board/kd_choudhary.webp",
        bio: "Er. K. D. Chaudhri as the first Chairman-cum-Managing Director (CMD) of the Punjab State Power Corporation Ltd. (PSPCL). He is recognised as the chief architect of strengthening the power sector in Punjab during his tenure spanning about 42 years. Under his stewardship, Punjab transitioned towards being a power-surplus state. He spearheaded a large-scale initiative to strengthen the state's transmission and distribution (T&D) network, committing over ₹1,611 crore under the Restructured Accelerated Power Development and Reforms Programme (R-APDRP).Chaudhri's tenure was marked by a strategic pivot toward technology to enhance customer services. Key initiatives included the launch of a single-number call center, 1912, for complaints, with a third-party feedback system to ensure genuine resolution. The corporation also implemented the SAP system for billing transparency and used GIS mapping to identify high-loss areas. Online bill payment facilities and a single-window system for new connections were also introduced.The success of these reforms was acknowledged with several national awards and high ratings. PSPCL was named the Best Performing Power Utility in the country by the Central Board of Irrigation and Power in 2015. It also received an A+ rating from the Ministry of Power, placing it in the top tier of power utilities alongside those of Gujarat. Additionally, PSPCL was awarded as the Best Digital PSU by the Department of Governance Reforms, Punjab, for its e-Governance initiatives. Er. K. D. Chaudhri’s leadership is best understood as a case study of a technocrat who successfully drove modernization and operational excellence while navigating deeply entrenched structural, financial, and political challenges inherent to a public sector enterprise.",
    },
    {
        name: "Harbans Sekhon",
        image: "/advisory_board/harbans_sekhon.webp",
        bio: "After a short stint with the Indian Air Force, he found another disciplined sector in the hospitality industry. He completed his hotel management degree in Bangkok, Thailand, in 1973, where he also did his on-the-job training. He later joined a hotel management college as a course instructor before returning to India in 1978.In India, he began his career as a management trainee with Holiday Inn, Agra. Upon completion of his training, he moved to Hotel Mughal Sheraton, Agra, before joining Hotel Hyatt Regency, New Delhi—a hotel known for its ethical training at all levels. He also worked at Taj Palace, New Delhi, before becoming a General Manager in 1986 at Hotel Konark, Bhubaneswar, Orissa. Later, he served as a General Manager at Hotel Asia Jammu Tawi.With years of experience as a General Manager, he decided to take on the challenge of launching hotels from project conception to operational readiness. He successfully launched three hotels: Hotel North Park, Panchkula, Haryana; Country Inn & Suites by Carlson, Katra, J&K; and Country Inn & Suites, Paradeep, Orissa. He couldn't overlook another part of the hospitality industry—aviation—and joined Air Deccan, an airline that pioneered the low-cost airline concept in India. After a successful tenure in aviation, he returned to hotels and launched two mega projects in North India: Hotel Nirvana, Ludhiana, and Hotel Noormahal Palace, Karnal. He then went back to Country Inn & Suites, working in Amritsar, Punjab, and later in Ahmedabad, Gujarat, before returning as the Director of Operations to Hotel Nirvana, Ludhiana, Punjab.At present:He is giving back to the industry that shaped a large part of his passionate and disciplined life. He trains and shares his experience with young people so they can become better hospitality representatives and help take this young industry to newer heights.",
    },
    // {
    //     name: "Shivani Gupta",
    //     image: "/advisory_board/shivani_gupta.webp",
    //     bio: "Shivani Gupta is a dynamic entrepreneur and the Executive Director of BNI Greater Punjab, where she has built one of India’s fastest-growing regions with 600+ members across multiple cities. She also plays a key leadership role in her family business, Rinox, a leading name in stainless steel and architectural products, contributing to its growth, brand strategy, and expansion. Recognized as the first woman leader to bring BNI to Punjab, Shivani has empowered countless SMEs through structured networking and institution building. Passionate about entrepreneurship, innovation, and community development, she has spearheaded impactful social initiatives including blood donation and flood relief drives. As a mentor and speaker, she inspires entrepreneurs with her vision and execution, bringing to the Advisory Board a powerful blend of business acumen, networking excellence, and social responsibility.",
    // },
    {
        name: "Gursimar Singh Somal",
        image: "/advisory_board/gursimar_singh_somar.webp",
        bio: "In 2012, Mr. Gursimar earned a Bachelor of Engineering degree in Electrical Engineering from Punjab Engineering College (PEC). Following his undergraduate studies, he began his career at General Electric, focusing on the field of Renewable Energy. In 2017, he furthered his education by completing a Master of Business Administration (MBA) with a specialization in Finance from Columbia Business School in New York. Since obtaining his MBA, Mr. Gursimar has joined a new company with a clear vision: to propel the organization forward by integrating its established history with innovative, modern approaches. .",
    },
];

export default function AdvisoryBoard() {
    const [activeMember, setActiveMember] = useState<number | null>(null);

    return (
        <section className="bg-[#0b0f1a] py-24 px-6 md:px-12 selection:bg-[#56c0db]/30">
            <div className="max-w-7xl mx-auto">

                {/* --- PROFESSIONAL HEADER --- */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                            Advisory <span className="text-slate-500 font-light italic">Board</span>
                        </h1>
                    </motion.div>
                </div>

                {/* --- PROFESSIONAL GRID --- */}
                <div className="grid grid-cols-1 gap-12">
                    {boardMembers.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="group bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#56c0db]/20 transition-all duration-500 shadow-2xl"
                        >
                            <div className="flex flex-col lg:flex-row min-h-[450px]">

                                {/* Image Container (30% width on Desktop) */}
                                <div className="lg:w-[30%] relative overflow-hidden group">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800?text=Leader"; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent opacity-60 lg:opacity-20" />
                                </div>

                                {/* Content Container (70% width on Desktop) */}
                                <div className="lg:w-[70%] p-8 md:p-14 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-baseline gap-4 mb-6">
                                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                                            {person.name}
                                        </h3>
                                    </div>

                                    {/* Scrollable/Expandable Bio Logic to handle long text */}
                                    <div className="relative">
                                        <p className={`text-slate-400 text-sm md:text-base leading-[1.8] mb-8 transition-all duration-500 ${activeMember === index ? "" : "line-clamp-4 md:line-clamp-6"}`}>
                                            {person.bio}
                                        </p>

                                        <button
                                            onClick={() => setActiveMember(activeMember === index ? null : index)}
                                            className="text-[#56c0db] text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            {activeMember === index ? "↑ Read Less" : "↓ Read More"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- FINAL DECORATION --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="mt-32 text-center"
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">
                        Humgence Collective Intelligence
                    </p>
                </motion.div>
            </div>
        </section>
    );
}