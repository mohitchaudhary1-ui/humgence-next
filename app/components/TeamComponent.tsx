"use client";
import { motion } from "framer-motion";

const team = [
    {
        name: "MOHIT CHAUDHARY",
        role: "Founder",
        bio: "At the helm of Humgence is Mohit Chaudhary, a seasoned strategist whose 18-year career has been defined by a relentless pursuit of precision and long-term value. Shaped by the rigorous environments of global consulting giants—including Accenture, KPMG, PwC, and SAP Labs—Mohit brings a rare depth of corporate strategy to the fast-paced world of digital marketing. Mohit’s expertise lies in his ability to bridge the gap between complex business ecosystems and modern digital agility. He does not view marketing in isolation; rather, he approaches it through the lens of a consultant, ensuring that every campaign is backed by foresight and structured for sustainable growth. His portfolio includes high-impact projects for industry leaders such as Hero Honda, Avantha Power, 3M, the Trident Group, and various Public Sector Undertakings (PSUs). Beyond the boardroom, Mohit channels the discipline and competitive spirit of a national-level athlete. A distinguished football and golf player, he applies the same focus, resilience, and strategic calculation to business that he does to sports. Under his leadership, Humgence delivers not just innovation, but performance-focused execution that stands the test of time.",
        grad: "from-pink-500 to-[#56c0db]",
        image: "/team/mohit_humgence.png",
        video: "/team/videos/Mohit Sir.mp4"
    },
    {
        name: "Kanika Gosain",
        role: "Human Resources",
        bio: "Kanika Gosain is a highly dynamic and results-oriented professional with 13 years of experience in Human Resources, specializing as a seasoned and passionate Talent Acquisition leader. As the Chief People Manager and Director at Humgence, she brings a wealth of expertise in managing HR operations and is an expert in delivering end-to-end solutions for talent acquisition, from junior to leadership roles.Kanika's professional profile highlights her proficiency in various key areas: Talent Acquisition & HR Operations: She has a proven track record of expertise in talent acquisition, HR generalist roles, and talent mapping for 13 years. Her skills include working on critical and high-value mandates for organizations , and she has hands-on exposure to managing HR projects focused on improving the candidate and hiring manager experience. She is also adept at managing the complete induction and exit process. Diversity & Inclusion: Kanika actively drives Diversity, Equity, and Inclusion hiring goals, and works on building a leadership talent pipeline to improve diversity ratios within organizations.Team Management & Leadership: She has a key role in team management, mentoring and monitoring team members' performance to ensure efficiency and the achievement of individual and group targets. She has a record of maintaining Time to Hire (TAT) and Service Level Agreements (SLA) on all mandates for 12 years.Employer Branding & Recruitment: Kanika acts as a Brand Ambassador for the organization, collaborating with the talent marketing team to create campaigns on LinkedIn and build a social media presence. She is also skilled in designing campaigns for internal employee referrals and has expertise in social media recruitment and employer branding. She was awarded as the Rising Star of the Year 2018 at the Awards 2018 in Noida.Kanika holds a Master of Business Administration in HR & IB.",
        grad: "from-pink-500 to-[#56c0db]",
        image: "/team/kanika_humgence.png",
        // video: "/team/videos/Mohit Sir.mp4"
    },
    {
        name: "Rahul Singh",
        role: "CTO",
        bio: "Rahul Singh is a distinguished technology leader and the Chief Technology Officer (CTO) at Humgence, bringing a decade of expertise in cutting-edge fields such as Artificial Intelligence (AI), Large Language Models (LLM), and data science. His career is marked by a unique blend of technical mastery and entrepreneurial drive, with a strong focus on developing intelligent, scalable, and secure software solutions.Rahul’s career trajectory is impressive and diverse, having held key roles at various innovative companies. He is the Founding Director of NeuralSift, where he has focused on harnessing the power of Large Language Models (LLM) and Industry 4.0 technologies for over five years. Concurrently, as Co-Founder of AyushmanBhava, he has spearheaded the development of intelligent software and devices for safety and security.Prior to his entrepreneurial ventures, Rahul served as a Lead Data Scientist at LiquidHub, where he spent two years driving data-centric initiatives. His experience also includes roles as a Data Scientist / SSE at RxLogix and as an Artificial Intelligence Consultant at the Translational Health Science and Technology Institute. In this consulting role, he contributed his AI expertise to a Drug Discovery Research Centre, showcasing his versatility and deep knowledge in applying AI to complex scientific problems.",
        grad: "from-pink-500 to-[#56c0db]",
        image: "/team/rahul_humgence.png",
        // video: "/team/videos/Mohit Sir.mp4"
    },
    // {
    //     name: "Deeksha",
    //     role: "Operations Lead",
    //     bio: "At Humgence, Deeksha Kalra our Operations Head plays a pivotal role in driving structure, strategy, and seamless execution across the organization. With a professional journey that began in 2015, she brings extensive experience in branding, marketing, PR, digital media, and large-scale event management.Her strength lies in transforming vision into well- defined systems, ensuring every project is executed with clarity, efficiency, and measurable impact.She leads cross - functional teams with strong leadership and accountability, aligning creative direction with operational excellence.With a deep understanding of brand positioning and execution dynamics, she ensures that Hungence consistently delivers high - quality experiences, streamlined processes, and sustainable growth across all initiatives.",
    //     grad: "from-amber-400 to-[#56c0db]",
    //     image: "/team/deeksha_humgence.png",
    //     video: "/team/videos/Deeksha.mp4"
    // },

    {
        name: "Edita Kohli",
        role: "Operations Head",
        bio: "As Operations Lead at Humgence, Edita Kohli drives the agency's social media function with precision, creativity, and purpose. She oversees a dedicated team of social media managers, setting the standard for consistency, discipline, and platform performance across every account. From strategy development and campaign ideation through to execution and in-depth analytics, Edita takes complete ownership of brand positioning and digital growth for each client she leads. Her portfolio includes key accounts such as Nirvana Hotel & Banquets, Deekay Electronics, and Lakmé Salon — each receiving bespoke content strategies and delivering measurable, impactful results. A natural leader with a sharp creative eye and a structured approach to planning, Edita fosters a culture of accountability and collaboration within her team, ensuring every campaign is aligned with brand identity and broader commercial goals. Her dedication and drive for excellence make her a cornerstone of Humgence's continued growth and client success.",
        grad: "from-[#56c0db] to-emerald-500",
        image: "/team/edita_humgence.png",
        video: "/team/videos/edita.mp4"

    },
    {
        name: "Sukhcharan Singh",
        role: "Senior Video Editor",
        bio: "Sukhcharan Singh Jagdeo is the Design Team Lead and Head of Graphics Operations at Humgence, bringing 11 years of excellence in the design industry and 3 years of dedicated leadership within the company. As a master of visual storytelling, he seamlessly blends creativity with technical precision, turning concepts into powerful visual experiences. With deep expertise in Photoshop, Premiere Pro, and CorelDRAW, he leads both video and graphic teams to deliver refined, high-impact campaigns. Backed by a strong academic foundation in computer applications, Sukhcharan combines discipline with artistry—crafting designs that are not only visually striking but rich in meaning and emotion.",
        grad: "from-blue-400 to-[#56c0db]",
        image: "/team/sukhcharan_humgence.png",
        video: "/team/videos/Sukhcharan.mp4"
    },
    {
        name: "Amandeep Singh",
        role: "Technical Head",
        bio: "As our Technical Lead and Full Stack Developer, Amandeep Singh is the driving force behind the robust digital architectures that power our agency. He doesn’t just oversee development; he meticulously designs every layer of our systems, ensuring a seamless transition from complex backend logic to high-performance user interfaces. Amandeep bridges the gap between ambitious brand visions and technical reality, leading our engineering team with a blend of strategic foresight and hands-on expertise. His commitment to excellence ensures every project is scalable, secure, and world-class. Under his leadership, we continue to push the boundaries of what’s possible in digital innovation.",
        grad: "from-[#56c0db] to-blue-600",
        image: "/team/amandeep_humgence.png",
        video: "/team/videos/Amandeep.mp4"
    },
     {
        name: "Shreya Kapoor",
        role: "Social Media Lead",
        bio: "Every scroll-stopping post, every viral moment, every conversation we spark online - that's intentional. None of it happens by accident.As the Social Media Lead at Humgence I live at the crossroads of creativity and strategy. My world revolves around crafting content that doesn't just look good, it performs. From ideation to execution, I translate our brand's vision into stories that resonate, campaigns that trend, and communities that genuinely engage.Social media today isn't just about posting - it's about presence. It's about showing up consistently, authentically, and boldly in a space that never sleeps. That's the standard I hold myself to every single day.Whether it's a product launch that needs buzz, a campaign that needs heart or a brand that needs a louder voice - I'm the person making it happen behind the scenes.If you follow us, you're already part of the story we're building. And trust me, the best chapters are still ahead.",
        grad: "from-red-400 to-[#56c0db]",
        image: "/team/shreya_humgence.png",
        video: "/team/videos/Shreya.mp4"
    },
    {
        name: "Harpreet Singh",
        role: "Meta & Google Ads Specialist",
        bio: "Harpreet Singh is a results-driven Meta and Google Ads Specialist at Humgence, dedicated to delivering high-performance digital advertising campaigns. With strong expertise in paid media strategy, audience targeting, and conversion optimization, he helps brands maximize ROI and scale sustainably. Harpreet specializes in creating data-backed campaigns that generate quality leads, increase sales, and strengthen online presence. His analytical mindset, combined with creative ad execution, ensures every campaign is optimized for measurable growth. Passionate about performance marketing and continuous learning, Harpreet focuses on turning insights into impactful strategies that drive real business results in today’s competitive digital landscape.",
        grad: "from-indigo-500 to-[#56c0db]",
        image: "/team/harpreet_humgence.png",
        video: "/team/videos/harpreet.mp4"
    },
    {
        name: "Gursharan Singh",
        role: "Video Editor & Graphic Designer",
        bio: "Gursharan is a highly skilled Video Editor and Graphic Designer with over five years of professional experience crafting compelling visual stories. With a sharp creative eye and strong technical expertise, he specializes in delivering impactful designs and seamless video edits that elevate brand presence. Proficient in Adobe Photoshop and Adobe Premiere Pro, along with the full Adobe Creative Suite, Gursharan combines creativity with precision to produce engaging digital content. From promotional videos and social media creatives to branding assets and cinematic edits, his work reflects attention to detail, storytelling strength, and a deep understanding of visual communication that drives results.",
        grad: "from-orange-400 to-[#56c0db]",
        image: "/team/gursharan_humgence.png",
        video: "/team/videos/gursharan.mp4"
    },
    {
        name: "Akshita",
        role: "UI/UX Designer",
        bio: "Akshita Verma is a UI/UX Designer at Humgence, where she focuses on creating meaningful, user-centric digital experiences. She designs intuitive and visually engaging interfaces that align with brand goals and drive conversions. Her work involves user research, wireframing, prototyping, and high-fidelity design for web and mobile platforms. Collaborating closely with marketing strategists, developers, and stakeholders, Akshita translates business objectives into seamless user journeys. With a strong balance of creativity, usability, and data-driven thinking, she contributes to building scalable digital products that enhance engagement, improve usability, and deliver measurable impact for brands.",
        grad: "from-rose-500 to-[#56c0db]",
        image: "/team/akshita_humgence.png",
        video: "/team/videos/Akshita.mp4"
    },
    {
        name: "Sehaj Singh Saggu",
        role: "Social Media Manager",
        bio: "Sehaj Singh Saggu plays a pivotal role in shaping our digital presence through thoughtful strategy and refined execution. With a strong understanding of audience behavior and platform dynamics, he has contributed to elevated brand visibility, high-impact campaigns, and sustained engagement growth. His approach blends creativity with performance, ensuring every piece of content aligns with brand intent and long-term value. Known for his precision and consistency, Sehaj continues to strengthen our social media ecosystem with clarity, relevance, and measurable results.",
        grad: "from-purple-600 to-[#56c0db]",
        image: "/team/sehaj_humgence.png",
        video: "/team/videos/Sehaj.mp4"
    },
    {
        name: "Gurinder Singh",
        role: "Video Editor",
        bio: "Gurinder Singh plays a vital role in shaping our visual storytelling as a Video Editor and Motion Graphics Artist at Humgence. His ability to transform ideas into refined, engaging visuals has consistently elevated the quality and impact of our content. With a strong sense of timing, detail, and creative direction, he has contributed to multiple high-performing campaigns and brand narratives. Gurinder’s dedication, consistency, and commitment to excellence reflect in every project he delivers. His performance continues to strengthen our creative standards, making him a valuable contributor to our growth and an important force behind our evolving visual identity.",
        grad: "from-[#56c0db] to-slate-600",
        image: "/team/gurinder_humgence.png",
        video: "/team/videos/Garry.mp4"
    },
    {
        name: "Armaan Singh",
        role: "Video Editor",
        bio: "Armaan is a skilled Video Editor known for his sharp eye for detail and strong storytelling instincts. With hands-on expertise in industry-leading software including Adobe Premiere Pro and After Effects, he transforms raw footage into seamless, engaging visual narratives. His editing style blends precision with creativity, ensuring every frame contributes to the overall impact of the story. Whether it’s promotional content, social media campaigns, or cinematic projects, Armaan delivers polished results that capture attention and hold it. Passionate about evolving trends and techniques, he consistently brings fresh energy and technical excellence to every project he undertakes.",
        grad: "from-[#56c0db] to-cyan-600",
        image: "/team/armaan_humgence.png",
        video: "/team/videos/Armaan.mp4"
    },
    {
        name: "Gagan Sharma",
        role: "Creative Director",
        bio: "Gagan Sharma is a creative director, content creator, and cinematographer with over five years of industry experience. He has collaborated with 70+ clients on a freelance basis, delivering impactful visual storytelling across digital and branded platforms. Gagan has also worked with Pitara TV, Chaupal Punjabi OTT, and Apple India, gaining diverse exposure across broadcast, streaming, and premium brand productions. His approach blends cinematic precision with strategic thinking, ensuring every project is both visually compelling and purpose-driven. From concept development to final execution, he focuses on crafting engaging narratives that elevate brands and create meaningful audience connections.",
        grad: "from-[#56c0db] to-blue-800",
        image: "/team/gagan_humgence.png",
        video: "/team/videos/gagan.mp4"
    },
    {
        name: "Hardik",
        role: "Event Planner & Manager",
        bio: "From setup to showtime, ensures every event runs smoothly.",
        grad: "from-emerald-500 to-[#56c0db]",
        image: "/team/hardik_humgence.png",
        video: "/team/videos/hardik.mp4"

    },
    {
        name: "Ishvir Singh",
        role: "Social Media Manager, Meta Ads",
        bio: "Ishvir Khangura is a results-driven digital marketing professional with over 1.5 years of practical experience in performance and social media marketing. He began his career as an Email Marketer, specializing in lead generation through targeted outreach and automation strategies. Over time, he expanded his expertise into Social Media Management, where he handled content planning, audience engagement, and brand growth. He has also worked as a Meta Ads Executive, managing and optimizing paid campaigns focused on generating quality leads and improving ROI. Ishvir brings a strong blend of creativity, analytical thinking, and execution skills to every project he handles.",
        grad: "from-[#56c0db] to-violet-600",
        image: "/team/ishvir_humgence.png",
        video: "/team/videos/Ishvir.mp4"
    },
    {
        name: "Sneha",
        role: "Social Media Manager",
        bio: "Sneha is the creative force behind Humgence’s digital identity and brand voice. As our Social Media Manager, Content Writer, and Brand Strategist, she leads the way in building brands that connect, convert, and grow with purpose. Her approach blends strategy with storytelling, creativity with clarity, and vision with execution. At Humgence, Sneha doesn’t just create content — she builds brand presence, digital trust, and long-term impact. Every strategy she designs, every campaign she shapes, and every narrative she crafts is rooted in authenticity, consistency, and growth-driven thinking. She transforms ideas into brands and brands into communities.",
        grad: "from-[#56c0db] to-teal-500",
        image: "/team/sneha_humgence.png",
        video: "/team/videos/Sneha.mp4"
    },
   
    {
        name: "Vansh",
        role: "Brand Strategist, Social Media Manager",
        bio: "Designing strategies that build brands beyond engagement metrics.",
        grad: "from-yellow-400 to-[#56c0db]",
        image: "/team/vansh_humgence.png",
        video: "/team/videos/Vansh.mp4"
    },
    {
        name: "Prabhdeep",
        role: "Business Development Manager",
        bio: "Building strategic partnerships that fuel measurable growth.",
        grad: "from-[#56c0db] to-green-600",
        image: "/team/prabhdeep_humgence.png",
        video: "/team/videos/Prabhdeep.mp4"
    },
    {
        name: "Satyam Tripathi",
        role: "Full Stack Developer",
        bio: "Satyam Tripathi is a passionate full-stack developer and automation specialist focused on building scalable digital products. He works seamlessly across frontend and backend technologies, transforming ideas into fast, functional, and user-centric applications. From crafting clean, intuitive interfaces to developing secure APIs and robust database architectures, he takes ownership of the complete product lifecycle. Satyam actively explores AI integrations, workflow automation, and SaaS systems to build efficient, revenue-driven solutions. Committed to continuous growth, he constantly sharpens his problem-solving, system design, and performance optimization skills. He believes in writing clean code, building with purpose, and delivering technology that creates lasting business impact.",
        grad: "from-slate-700 to-[#56c0db]",
        image: "/team/satyam_humgence.png",
        video: "/team/videos/Satyam.mp4"
    },
    {
        name: "Namrata",
        role: "Photographer",
        bio: "Capturing everyday moments as powerful brand visuals.",
        grad: "from-orange-300 to-[#56c0db]",
        image: "/team/namrata_humgence.png",
        video: "/team/videos/Namrata.mp4"
    },
    {
        name: "Abhishek",
        role: "Photographer & Videographer",
        bio: "Blending photography and film to tell complete brand stories.",
        grad: "from-[#56c0db] to-indigo-800",
        image: "/team/abhishek_humgence.png",
        video: "/team/videos/Abhishek.mp4"
    },
    // {
    //     name: "Taran",
    //     role: "Graphic Designer",
    //     bio: "Creating bold visuals designed to stand out instantly.",
    //     grad: "from-[#56c0db] to-orange-500",
    //     image: "/team/taran_humgence.png",
    //     video: "/team/videos/Taran.mp4"
    // }
];
export default function PerfectTeamGrid() {
    return (
        <>
        
        <div className="bg-[#030712] min-h-screen py-24 px-6 overflow-hidden">

            {/* --- SECTION HEADER --- */}
            <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[1px] bg-[#56c0db]" />
                        <h2 className="text-[#56c0db] font-black tracking-[0.4em] uppercase text-xs">The Collective</h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Meet the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] via-white to-[#56c0db] animate-gradient-x">
                            Team.
                        </span>
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-xl font-light lg:text-right max-w-md ml-auto leading-relaxed"
                >
                    A high-performance team where every member brings a unique frequency to the digital spectrum.
                </motion.p>
            </div>

            {/* --- THE GRID --- */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0,
                            y: i % 3 === 1 ? 100 : 0
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative h-[480px] rounded-[3rem] overflow-hidden bg-slate-900/50 border border-white/10 hover:border-[#56C0DB]/50 transition-colors duration-500"
                    >
                        {/* 1. DYNAMIC GRADIENT STAGE */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.grad} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

                        {/* --- NEW: PLAY ICON BUTTON --- */}
                        {member.video && (
                            <a
                                href={member.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-8 right-8 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-[#56c0db] hover:border-[#56c0db] transition-all duration-300 group/play shadow-lg"
                            >
                                {/* Ping Animation */}
                                <div className="absolute inset-0 rounded-full bg-[#56c0db] animate-ping opacity-20 group-hover:hidden" />

                                {/* SVG Icon - Centered precisely */}
                                <div className="relative flex items-center justify-center w-full h-full">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-white transition-transform group-hover:scale-110 translate-x-[1px]"
                                    >
                                        <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
                                    </svg>
                                </div>
                            </a>
                        )}

                        {/* 2. CIRCULAR IMAGE CONTAINER */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 md:w-72 md:h-72">
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${member.grad} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                                <motion.div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#56c0db]/30 transition-all duration-700 relative z-10 shadow-2xl">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* 3. HOVER CONTENT PANEL */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none group-hover:pointer-events-auto">
                            <motion.div
                                className="absolute inset-0 z-20 flex flex-col p-6 sm:p-10 bg-black/85 backdrop-blur-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-[0.7s] ease-[0.16,1,0.3,1]"
                            >
                                <div className="relative h-full flex flex-col pt-10">
                                    <div className="mb-4">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "3rem" }}
                                            className="h-[2px] bg-[#56c0db] mb-2"
                                        />
                                        <p className="text-[#56c0db] text-[10px] font-black uppercase tracking-[0.2em]">
                                            About Member
                                        </p>
                                    </div>
                                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#56c0db]/40 scrollbar-track-transparent hover:scrollbar-thumb-[#56c0db] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#56c0db]/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#56c0db] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                                        <p className="text-slate-200 text-sm sm:text-[15px] font-light leading-relaxed tracking-wide py-4">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. DEFAULT VISIBLE LABEL */}
                        <div className="absolute bottom-8 left-10 z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500">
                            <h4 className="text-white text-2xl font-black uppercase tracking-tighter drop-shadow-lg">
                                {member.name}
                            </h4>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#56c0db]" />
                                <p className="text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">{member.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </>
    );
}