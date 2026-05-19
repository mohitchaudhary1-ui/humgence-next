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