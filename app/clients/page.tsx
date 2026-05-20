
import { Metadata } from "next";
import ClientComponent from "../components/ClientComponent";


export const metadata: Metadata = {
  title: "Our Clients | 60+ Brands Trust Humgence",
  description:
    "From Best Western Plus and Lakme to BNI and Moti Mahal — Humgence has delivered digital results for 60+ brands across hospitality, retail, health and real estate.",
  alternates: { canonical: "https://humgence.com/clients" },
  openGraph: {
    title: "Our Clients — 60+ Brands Trust Humgence",
    description:
      "60+ brands across hospitality, retail, healthcare and real estate in India and UAE.",
    url: "https://humgence.com/clients",
    images: [{ url: "/banner.webp", width: 1200, height: 630 }],
    locale: "en_IN",
  },
};
export default function ClientsPage() {
   

    // Grid Container Variants
   

    return (
        <>
        
   <ClientComponent />
        </>
    );
}