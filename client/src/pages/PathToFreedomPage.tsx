import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import PathToFreedom from "@/components/PathToFreedom";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function PathToFreedomPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Your Path to Financial Freedom"
        subtitle="Empowering Healthcare Entrepreneurs"
        description="Discover the proven pathway that transforms healthcare professionals from clinicians to successful entrepreneurs, building wealth while making a meaningful impact in their communities."
        backgroundImage="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg"
      />
      <PathToFreedom />
      <Footer />
    </div>
  );
}
