import type { Metadata } from "next";
import { CompraSimpleCaseStudyContent } from "@/components/case-studies/compra-simple/CompraSimpleCaseStudyContent";

export const metadata: Metadata = {
  title: "Compra Simple — InvertirOnline",
  description:
    "Designing a faster, parallel purchase flow for experienced investors on InvertirOnline — letting users buy stocks in two taps without navigating away from the list.",
};

export default function CompraSimpleCaseStudyPage() {
  return <CompraSimpleCaseStudyContent />;
}
