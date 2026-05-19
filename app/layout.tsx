import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Humgence | Digital Creative Studio",
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

    openGraph: {
        title: "Humgence",
        description:
            "We build premium digital systems and experiences.",
        url: "https://humgence.com",
        siteName: "Humgence",
        images: [
            {
                url: "/banner.webp",
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
        images: ["/banner.webp"],
    },

    robots: {
        index: true,
        follow: true,
    },
    // local seo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
