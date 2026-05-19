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
    default: "Humgence | Digital Creative Studio",
    template: "%s | Humgence",
  },

  description:
    "Humgence builds digital ecosystems, branding systems, modern websites, and scalable digital experiences.",

  keywords: [
    "Humgence",
    "Digital Agency",
    "Creative Studio",
    "Web Development",
    "Branding",
    "SEO",
    "UI UX",
  ],

  authors: [{ name: "Humgence" }],

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
    title: "Humgence",
    description:
      "We build premium digital systems and experiences.",

    url: "https://humgence.com",

    siteName: "Humgence",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humgence",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Humgence",

    description:
      "Premium digital creative studio.",

    images: ["/og-image.jpg"],
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