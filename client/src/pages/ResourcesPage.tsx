import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function ResourcesPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Resources & Tools"
        subtitle="Empowering Your Success"
        description="Access our comprehensive collection of books, guides, tools, and educational materials designed to help healthcare entrepreneurs grow, prosper, and leave a lasting legacy."
        backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <Resources />
      <Footer />
    </div>
  );
}
