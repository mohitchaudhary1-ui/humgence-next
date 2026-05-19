import type { Metadata } from "next";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About Humgence | 10+ Years, 50+ Global Brands",
  description:
    "Meet Humgence — growth architects with 10+ years building branding systems, websites, and digital strategies for 50+ brands across India and the UAE.",
  alternates: { canonical: "https://humgence.com/about" },
  openGraph: {
    title: "About Humgence | 10+ Years, 50+ Global Brands",
    description:
      "Growth architects since 2015. Branding, web development & AI automation for 50+ brands in India and UAE.",
    url: "https://humgence.com/about",
    images: [{ url: "/banner.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
    return <AboutPage />;
}