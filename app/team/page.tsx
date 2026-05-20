
import { Metadata } from "next";
import TeamComponent from "../components/TeamComponent";
export const metadata: Metadata = {
  title: "Our Team | Meet the People Behind Humgence",
  description:
    "Meet the strategists, designers and developers at Humgence building digital systems for brands across India and the UAE.",
  alternates: { canonical: "https://humgence.com/team" },
  openGraph: {
    title: "Our Team — Humgence Digital Agency",
    description:
      "The creative minds behind 71+ brand transformations across India and UAE.",
    url: "https://humgence.com/team",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
  },
};
export default function PerfectTeamGrid() {
    return (
        <>
        
        <TeamComponent  />
        </>
    );
}