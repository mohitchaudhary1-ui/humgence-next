"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}



export default function ContactPage() {
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState<FormErrors>({}); // New state for field-specific errors
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({}); // Clear previous errors
        setResult("");

        const form = event.currentTarget; const formData = new FormData(form);

        // 1. Get and Trim all fields
        const name = formData.get("name")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        // 2. Validation Logic
        let newErrors: FormErrors = {};

        if (!name) {
            newErrors.name = "Required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = "Required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!phone) {
            newErrors.phone = "Required";
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        // If there are errors, stop and show them
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // 3. Proceed with submission
        setIsSubmitting(true);
        setResult("Sending....");

        formData.set("name", name!);
        formData.set("email", email!);
        formData.set("phone", phone!);
        if (message) formData.set("message", message);

        formData.append("access_key", "a0fbedaf-6df2-4551-b7eb-ec7f7dc6b018");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setIsSubmitting(false);
                form.reset();
                window.location.href = "/thankyou";
            } else {
                setResult(data.message || "Submission failed");
                setIsSubmitting(false);
            }
        } catch (error) {
            setResult("Network error. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <>

            <div className="bg-[#0f172a] min-h-screen selection:bg-[#56c0db] selection:text-white pb-20">
                {/* --- CINEMATIC HEADER --- */}
                <section className="relative h-[50vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#56c0db]/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 mt-20"
                    >
                        <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                            Book Free <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] to-slate-400 italic">Consultation.</span>
                        </h1>
                    </motion.div>
                </section>

                {/* --- CONTENT CARD --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">

                        {/* LEFT INFO BAR */}
                        <motion.div
                            className="lg:col-span-4 bg-slate-900/95 backdrop-blur-xl p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-white/5"
                        >
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        {[
                                            { title: "Email", value: "info@humgence.com", color: "bg-[#56c0db]", link: "mailto:info@humgence.com" },
                                            { title: "WhatsApp", value: "+91 7508400002", color: "bg-emerald-500", link: "Tel:+91 7508400002" },
                                            { title: "Office", value: "SCO 140, 4 Floor, Firoz Gandhi Market, Jila Kacheri Area, Model Gram, Ludhiana, Punjab 141001", color: "bg-slate-400" },
                                            { title: "Office", value: "AlKazim Tower, Business Central, Dubai Internet City, Sheikh Zayed Road, Dubai, UAE", color: "bg-slate-400" }
                                        ].map((item, i) => (
                                            <div key={i} className="group">
                                                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{item.title}</p>
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-1 h-3 ${item.color} rounded-full group-hover:h-5 transition-all`} />
                                                    <a href={item.link} className="text-slate-200 font-medium text-base hover:text-[#56c0db]">{item.value}</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: THE FORM */}
                        <motion.div className="lg:col-span-8 bg-slate-50 p-8 md:p-16 lg:p-20">
                            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

                                {/* Full Name */}
                                <div className="space-y-2 group">
                                    <label className="text-black text-[10px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-black'} bg-transparent py-3 focus:outline-none text-slate-900 font-semibold`}
                                        placeholder="e.g. John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tight italic">{errors.name}</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2 group">
                                    <label className="text-black text-[10px] font-bold uppercase tracking-widest ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        maxLength={10}
                                        className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-black'} bg-transparent py-3 focus:outline-none text-slate-900 font-semibold`}
                                        placeholder="e.g. 9876543210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tight italic">{errors.phone}</p>}
                                </div>

                                {/* Email Address */}
                                <div className="md:col-span-2 space-y-2 group">
                                    <label className="text-black text-[10px] font-bold uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-black'} bg-transparent py-3 focus:outline-none text-slate-900 font-semibold`}
                                        placeholder="name@company.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-tight italic">{errors.email}</p>}
                                </div>

                                {/* Message Brief */}
                                <div className="md:col-span-2 space-y-2 pt-2">
                                    <label className="text-black text-[10px] font-bold uppercase tracking-widest ml-1">Message Brief</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full border border-black rounded-2xl p-5 focus:outline-none focus:ring-4 focus:ring-black/5 text-slate-900 font-medium placeholder:text-slate-300 resize-none bg-white"
                                        placeholder="Describe your project vision..."
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.01, translateY: -2 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-[#56c0db] transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                    </motion.button>

                                    {result && (
                                        <p className={`mt-4 text-center text-[10px] font-bold uppercase tracking-widest ${result.includes("Successfully") ? "text-emerald-500" : "text-red-500"}`}>
                                            {result}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}