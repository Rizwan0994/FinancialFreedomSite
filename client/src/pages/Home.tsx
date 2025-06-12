import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PathToFreedom from "@/components/PathToFreedom";
import NextFramework from "@/components/NextFramework";
import ClientSuccessPath from "@/components/ClientSuccessPath";
import Services from "@/components/Services";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <PathToFreedom />
      <NextFramework />
      <ClientSuccessPath />
      <Services />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
