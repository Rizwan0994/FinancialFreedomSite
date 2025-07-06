import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeServe from "@/components/WhoWeServe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function Home() {
  useScrollToTop();
  
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
