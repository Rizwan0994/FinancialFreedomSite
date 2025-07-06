import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import NextFramework from "@/components/NextFramework";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function NextFrameworkPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="The NEXT Framework"
        subtitle="Navigate, Elevate, eXit, Thrive"
        description="Our proprietary framework designed specifically for healthcare entrepreneurs who want to build, scale, and successfully exit their practices while creating lasting wealth and legacy."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />
      <NextFramework />
      <Footer />
    </div>
  );
}
