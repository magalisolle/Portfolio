import type { Metadata } from "next";
import { HigoCaseStudyContent } from "@/components/case-studies/higo/HigoCaseStudyContent";

export const metadata: Metadata = {
  title: "Payroll — Higo (by Payana)",
  description:
    "Designing a payroll dispersal tool for Higo users — replacing manual bank layouts with a clearer, faster, and more reliable experience for Mexican SMBs.",
};

export default function HigoCaseStudyPage() {
  return <HigoCaseStudyContent />;
}
