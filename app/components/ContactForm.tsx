"use client";
import { useState } from "react";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function HomeContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("");

    if (!validate()) return;

    setStatus("loading");

    const formData = new FormData();
    formData.append("name", form.name.trim());
    formData.append("email", form.email.trim());
    formData.append("phone", form.phone.trim());
    formData.append("message", form.message.trim());
    formData.append("subject", "New Home Page Lead");
    formData.append("access_key", "a0fbedaf-6df2-4551-b7eb-ec7f7dc6b018");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        // setMsg("✅ Thanks! We will contact you shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });
        window.location.href = "/thankyou";

        // Optional WhatsApp redirect
        // window.open(`https://wa.me/91${form.phone}`, "_blank");

      } else {
        setStatus("error");
        setMsg("❌ Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMsg("❌ Network error. Please try again.");
    }
  };

  return (
   <section className="relative bg-[#0b1120] py-28 px-4 overflow-hidden">

  {/* Premium glow system */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#56c0db] blur-[180px] rounded-full" />
    <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-white blur-[220px] opacity-10 rounded-full" />
  </div>

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div className="text-center lg:text-left space-y-8">

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tighter">
        Let’s Build Something <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] via-white to-slate-400">
          Amazing Together
        </span>
      </h2>

      <p className="text-white/50 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
        Share your idea — we’ll transform it into a scalable digital product within days, not months.
      </p>

      <div className="space-y-3 text-white/60 text-sm">
        <p>✔ Fast Response Guarantee</p>
        <p>✔ Expert Strategy & Execution</p>
        <p>✔ Transparent Pricing Model</p>
      </div>

    </div>

    {/* FORM - GLASS LUXURY PANEL */}
    <div className="relative">

      {/* glass layer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl" />

      <div className="relative p-8 md:p-10 space-y-5">

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#56c0db] focus:ring-2 focus:ring-[#56c0db]/20 outline-none transition"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#56c0db] focus:ring-2 focus:ring-[#56c0db]/20 outline-none transition"
          />
          {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#56c0db] focus:ring-2 focus:ring-[#56c0db]/20 outline-none transition"
          />
          {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#56c0db] focus:ring-2 focus:ring-[#56c0db]/20 outline-none resize-none transition"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative w-full overflow-hidden rounded-xl py-3 bg-[#56c0db] text-black font-bold text-xs uppercase tracking-[0.3em] transition-all hover:bg-white"
          >
            <span className="relative z-10">
              {status === "loading" ? "Sending..." : "Get Free Consultation"}
            </span>

            {/* shine effect */}
            <span className="absolute inset-0 bg-white translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>

          {/* STATUS */}
          {msg && (
            <p className={`text-center text-sm font-medium ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}>
              {msg}
            </p>
          )}

        </form>
      </div>
      
    </div>

  </div>
</section>
  );
}