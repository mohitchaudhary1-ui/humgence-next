import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
    title: "Contact | Humgence",
    description:
        "Get in touch with Humgence for digital marketing, branding, website development, SEO, and growth solutions.",
    alternates: {
        canonical: "https://humgence.com/contact",
    },
        keywords: [
        "Humgence",
        "Contact",
        "Digital Marketing",
        "Branding",
        "Website Development",
        "SEO",
        "Growth Solutions",
    ],

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <ContactPage />;
}