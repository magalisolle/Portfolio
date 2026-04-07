import type { Metadata } from "next";
import { TransactionsCaseStudyContent } from "@/components/case-studies/transactions/TransactionsCaseStudyContent";

export const metadata: Metadata = {
  title: "Transactions Redesign — Payana",
  description:
    "Redesigning the transactions experience for Payana — from scattered modules and invisible data to a unified panel users actually open, with a self-service rejection flow that replaced manual back-office resolution.",
};

export default function TransactionsCaseStudyPage() {
  return <TransactionsCaseStudyContent />;
}
