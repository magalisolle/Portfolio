import type { Metadata } from "next";
import { CaucionesCaseStudyContent } from "@/components/case-studies/cauciones/CaucionesCaseStudyContent";

/**
 * Cauciones case study — layout & copy from Figma “Cauciones” frame
 * (FeF5ES2xRY75wBP8gFjOVr, node 4845-2308). Media lives under
 * `public/images/case-studies/cauciones/`.
 */
export const metadata: Metadata = {
  title: "Adaption of Cauciones — IOL Invertironline",
  description:
    "Bringing cauciones from web to mobile: research, Hotjar data, survey insights, and design tradeoffs (Figma 4845-2308).",
};

export default function CaucionesCaseStudyPage() {
  return <CaucionesCaseStudyContent />;
}
