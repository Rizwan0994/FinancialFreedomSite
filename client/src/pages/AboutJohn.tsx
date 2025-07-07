import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { updatePageSEO, SEO_DATA } from "@/lib/seo";
import { useEffect } from "react";

export default function AboutJohn() {
  useScrollToTop();

  // Update SEO
  useEffect(() => {
    const seoData = SEO_DATA.aboutJohn;
    updatePageSEO(seoData.title, seoData.description, seoData.keywords);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Discover Our Compassionate Care Approach"
        subtitle="Meet Our Founder"
        description="Prestige Healthcare Resources Inc. stands as a beacon of compassion and excellence, deeply rooted in the communities of Ward 8, Washington, D.C., Prince George's County, and Baltimore City, Maryland."
        backgroundImage="https://images.pexels.com/photos/5439461/pexels-photo-5439461.jpeg"
      />
      <About />
      <Footer />
    </div>
  );
}
