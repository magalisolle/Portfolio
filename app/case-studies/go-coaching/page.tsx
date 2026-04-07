import type { Metadata } from "next";
import { GoCoachingCaseStudyContent } from "@/components/case-studies/go-coaching/GoCoachingCaseStudyContent";

/**
 * Go! Coaching case study — layout & copy from Figma "Go! Coaching" frame
 * (FeF5ES2xRY75wBP8gFjOVr, node 4953-5639). Media lives under
 * `public/images/` (same filenames as in Figma exports).
 */
export const metadata: Metadata = {
  title: "Go! Coaching — Sales Performance Platform for Loan Officers",
  description:
    "Replacing 6 spreadsheets and a failed CRM with a single connected platform for loan officers and coaches. UX research, product strategy, and a 13-week build.",
};

export default function GoCoachingCaseStudyPage() {
  return <GoCoachingCaseStudyContent />;
}
