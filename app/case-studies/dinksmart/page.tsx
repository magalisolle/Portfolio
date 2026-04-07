import type { Metadata } from "next";
import { DinksmartCaseStudyContent } from "@/components/case-studies/dinksmart/DinksmartCaseStudyContent";

export const metadata: Metadata = {
  title: "Dinksmart — Pickleball Match Coordination App",
  description:
    "Designing and shipping a mobile app for the SoCal pickleball community — navigating mid-project constraints, accessibility advocacy, and complex flow documentation.",
};

export default function DinksmartCaseStudyPage() {
  return <DinksmartCaseStudyContent />;
}
