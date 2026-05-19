import type { Metadata } from "next";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
    title: "About Us - Humgence",
    description:
        "Discover Humgence: a full-service digital marketing agency dedicated to driving measurable growth through strategy, creativity, and technology.",
    alternates: {
        canonical: "https://humgence.com/about",
    },
    keywords: [
        "Humgence",
        "Digital Marketing Agency",
        "SEO",
        "Website Development",
        "Performance Marketing",
        "Branding",
        "Growth Solutions",
        "Marketing Agency",
    ],
};

export default function Page() {
    return <AboutPage />;
}