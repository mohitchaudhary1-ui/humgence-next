import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InsaneCursor from "./components/Cursor";
import Whatsapp from "./components/Whatsapp";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://humgence.com"),

  title: {
    default: "Digital Agency in Ludhiana & Dubai | Branding, Web & AI — Humgence",
    template: "%s — Humgence",
  },

  description:
    "Humgence is a full-service digital agency in Ludhiana & Dubai — branding, web development, social media & AI automation for 50+ brands across India and the UAE.",

  alternates: {
    canonical: "https://humgence.com",
  },

  authors: [{ name: "Humgence", url: "https://humgence.com" }],
  creator: "Humgence",
  publisher: "Humgence",
  applicationName: "Humgence",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Humgence — Digital Agency | Branding, Web & AI",
    description:
      "We build brands into global digital experiences — branding, web development, social media & AI automation. 10+ years, 50+ clients across India and UAE.",
    url: "https://humgence.com",
    siteName: "Humgence",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humgence — Digital Agency India & UAE",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Humgence — Digital Agency | Branding, Web & AI",
    description:
      "Branding, web development, social media & AI automation for 50+ brands across India and UAE.",
    images: ["/banner.webp"],
  },
};


// ─── JSON-LD Schema ────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://humgence.com/#organization",
      "name": "Humgence",
      "url": "https://humgence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://humgence.com/logo.png",
        "width": 200,
        "height": 60,
      },
      "description":
        "Humgence is a full-service digital agency offering branding, web development, social media marketing and AI automation for businesses across India and UAE.",
      "foundingDate": "2015",
      "email": "info@humgence.com",
      "telephone": "+917508400002",
      "sameAs": [
        "https://www.instagram.com/humgence/",
        "https://www.facebook.com/share/1Fj6sf9MSc/",
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "SCO 140, 4th Floor, Firoz Gandhi Market",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "postalCode": "141001",
          "addressCountry": "IN",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "AlKazim Tower, Business Central, Dubai Internet City",
          "addressLocality": "Dubai",
          "addressCountry": "AE",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Agency Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://humgence.com/#ludhiana",
      "name": "Humgence — Ludhiana",
      "url": "https://humgence.com",
      "telephone": "+917508400002",
      "email": "info@humgence.com",
      "image": "https://humgence.com/og-image.jpg",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "SCO 140, 4th Floor, Firoz Gandhi Market",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "postalCode": "141001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.9010,
        "longitude": 75.8573,
      },
      "parentOrganization": { "@id": "https://humgence.com/#organization" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://humgence.com/#dubai",
      "name": "Humgence — Dubai",
      "url": "https://humgence.com",
      "telephone": "+971585066985",
      "email": "info@humgence.com",
      "image": "https://humgence.com/og-image.jpg",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "AlKazim Tower, Business Central, Dubai Internet City",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.0948,
        "longitude": 55.1562,
      },
      "parentOrganization": { "@id": "https://humgence.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://humgence.com/#website",
      "url": "https://humgence.com",
      "name": "Humgence",
      "publisher": { "@id": "https://humgence.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://humgence.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Whatsapp />


        <Header />
        <InsaneCursor />


        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}