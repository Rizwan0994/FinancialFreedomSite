import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeServe from "@/components/WhoWeServe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { updatePageSEO, SEO_DATA } from "@/lib/seo";
import { useEffect } from "react";

export default function Home() {
  useScrollToTop();
  
  // Update SEO
  useEffect(() => {
    const seoData = SEO_DATA.home;
    updatePageSEO(seoData.title, seoData.description, seoData.keywords);
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Your Lifestyle Navigator™",
      "description": "Healthcare business growth and financial planning services for healthcare entrepreneurs",
      "url": "https://yourlifestylenavigator.com",
      "telephone": "+1 202-991-1745",
      "email": "support@yourlifestylenavigator.com",
      "founder": {
        "@type": "Person",
        "name": "John S. Smith Jr.",
        "jobTitle": "Healthcare Business Coach & Financial Navigator",
        "description": "RN, BSN - Clinician-turned-entrepreneur specializing in healthcare business growth"
      },
      "serviceType": [
        "Healthcare Business Consulting",
        "Financial Planning",
        "Business Exit Strategy",
        "Wealth Building"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    };
    
    // Add structured data script to head
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <WhoWeServe />
      <Contact />
      <Footer />
    </div>
  );
}
