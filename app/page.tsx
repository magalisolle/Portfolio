import { About } from "@/components/home/About";
import { AIWorkflow } from "@/components/home/AIWorkflow";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Hero } from "@/components/home/Hero";
import { ScrollUpButton } from "@/components/home/ScrollUpButton";
import { SideProjects } from "@/components/home/SideProjects";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteNav } from "@/components/home/SiteNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <CaseStudies />
      <SideProjects />
      <AIWorkflow />
      <About />
      <SiteFooter />
      <ScrollUpButton />
    </main>
  );
}
