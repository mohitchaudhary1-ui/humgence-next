import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Humgence | Digital Agency in Ludhiana & Dubai",
  description:
    "Get in touch with Humgence. SCO 140, Firoz Gandhi Market, Ludhiana, Punjab 141001. AlKazim Tower, Dubai Internet City. Call +91 7508400002.",
  alternates: { canonical: "https://humgence.com/contact" },
  openGraph: {
    title: "Contact Humgence | Ludhiana & Dubai",
    description:
      "Reach us in Ludhiana or Dubai. Call +91 7508400002 or email info@humgence.com.",
    url: "https://humgence.com/contact",
    images: [{ url: "/banner.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
    return <ContactPage />;
}