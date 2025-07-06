import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function ServicesPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Solutions for Healthcare Entrepreneurs"
        description="From business growth strategies to wealth building and exit planning, we provide the complete suite of services you need to transform your healthcare practice into a thriving enterprise."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <Services />
      <Footer />
    </div>
  );
}
