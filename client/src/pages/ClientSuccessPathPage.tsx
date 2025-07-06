import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ClientSuccessPath from "@/components/ClientSuccessPath";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function ClientSuccessPathPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHero
        title="Client Success Path"
        subtitle="Proven Results for Healthcare Entrepreneurs"
        description="See how our clients have transformed their practices and lives through our comprehensive approach to business growth, wealth building, and strategic exit planning."
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <ClientSuccessPath />
      <Footer />
    </div>
  );
}
