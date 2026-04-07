import type { Metadata } from "next";
import { BecomingCaseStudyContent } from "@/components/case-studies/becoming/BecomingCaseStudyContent";

export const metadata: Metadata = {
  title: "Becoming — Turning Reading into Action",
  description:
    "Designing a web app that turns Kindle and Readwise highlights into one personalized daily insight — bridging the gap between reading and actually applying what you learn.",
};

export default function BecomingCaseStudyPage() {
  return <BecomingCaseStudyContent />;
}
