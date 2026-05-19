import type { Metadata } from "next";
import ServicesPage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Digital Marketing, Branding & Web Development Services",
  description:
    "Social media marketing, brand consulting, website development & AI automation for businesses in Ludhiana, Punjab and Dubai UAE.",
  alternates: { canonical: "https://humgence.com/services" },
  openGraph: {
    title: "Services — Humgence | Digital Marketing, Branding & Web Development",
    description:
      "Social media, brand consulting, web development & AI automation. Full-service digital agency in India & UAE.",
    url: "https://humgence.com/services",
    images: [{ url: "/banner.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
    return <ServicesPage />;
}