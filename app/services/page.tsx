import type { Metadata } from "next";
import ServicesPage from "../components/ServicePage";

export const metadata: Metadata = {
    title: "Our Services - Humgence",
    description:
        "Explore the comprehensive range of digital marketing services we offer to drive your business growth and success.",
    alternates: {
        canonical: "https://humgence.com/services",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <ServicesPage />;
}