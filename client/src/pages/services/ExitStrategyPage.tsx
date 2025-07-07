import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useLocation } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { FaDoorOpen, FaCheck, FaCalendarCheck, FaArrowRight, FaRocket } from 'react-icons/fa';
import { updatePageSEO, SEO_DATA } from "@/lib/seo";
import { useEffect } from "react";

export default function ExitStrategyPage() {
  useScrollToTop();
  const [, setLocation] = useLocation();

  // Update SEO
  useEffect(() => {
    const seoData = SEO_DATA.exitStrategy;
    updatePageSEO(seoData.title, seoData.description, seoData.keywords);
  }, []);

  const navigateToStartHere = () => {
    setLocation("/start-here");
  };

  const services = [
    "Business exit planning & succession coaching",
    "Funded buy-sell agreements",
    "Business continuity protection",
    "Data room preparation & founder transition coaching"
  ];

  const benefits = [
    {
      title: "Exit Planning Strategy",
      description: "Comprehensive planning to maximize your practice value and ensure smooth transition."
    },
    {
      title: "Buy-Sell Agreements", 
      description: "Properly funded agreements that protect all parties in ownership transitions."
    },
    {
      title: "Business Continuity",
      description: "Protection strategies that ensure your practice continues operating seamlessly."
    },
    {
      title: "Transition Coaching",
      description: "Personal guidance through the emotional and practical aspects of business exit."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Split Layout */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#141e5b]/10 rounded-full text-[#141e5b] text-sm font-medium">
                <FaDoorOpen className="mr-2" />
                eXit Strategy
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Design Your Ideal Exit Strategy
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're planning to sell, transfer ownership, or retire, our eXit Strategy services help you maximize your practice value and ensure a smooth transition. Plan your exit on your terms with strategies that honor your mission and legacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={navigateToStartHere}
                  className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center group"
                >
                  Schedule Strategy Session
                  <FaCalendarCheck className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => setLocation("/services")}
                  variant="outline"
                  className="border-[#141e5b] text-[#141e5b] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b] hover:text-white transition-colors inline-flex items-center group"
                >
                  View All Services
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661762503491-815404e48a7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Healthcare practice transition and exit planning consultation"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141e5b]/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#141e5b]/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#141e5b]/5 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our eXit Strategy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive exit planning solutions that maximize value and ensure smooth transitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start group"
              >
                <div className="w-6 h-6 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <FaCheck className="text-white text-xs" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#141e5b] transition-colors">
                    {service}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] text-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <FaRocket className="mr-2 text-yellow-300" />
            Ready to Plan Your Exit?
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Let's Design Your Ideal eXit Strategy
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-2">
            Schedule your complimentary exit planning session to discover how our eXit Strategy services can help you transition from your practice on your terms.
          </p>
          
          <Button 
            onClick={navigateToStartHere}
            className="bg-white text-[#141e5b] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            <span className="hidden sm:inline">Schedule Your Exit Planning Session</span>
            <span className="sm:hidden">Schedule Exit Session</span>
            <FaCalendarCheck className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-white/70 mt-6">
            ✓ Complimentary consultation • ✓ No obligation • ✓ Proven exit strategies
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
