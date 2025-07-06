import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useLocation } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { FaChartLine, FaCheck, FaCalendarCheck, FaArrowRight, FaRocket } from 'react-icons/fa';

export default function ElevateWealthPage() {
  useScrollToTop();
  const [, setLocation] = useLocation();

  const navigateToStartHere = () => {
    setLocation("/start-here");
  };

  const services = [
    "Advanced financial planning",
    "Wealth building strategies",
    "Tax optimization",
    "Investment planning",
    "Strategic insurance solutions (life, disability, business protection)"
  ];

  const benefits = [
    {
      title: "Financial Planning Excellence",
      description: "Comprehensive wealth building strategies tailored to healthcare entrepreneurs."
    },
    {
      title: "Tax Optimization", 
      description: "Advanced strategies to minimize tax burden and maximize wealth accumulation."
    },
    {
      title: "Investment Management",
      description: "Professional investment planning that aligns with your risk tolerance and goals."
    },
    {
      title: "Insurance Solutions",
      description: "Strategic protection for your business, income, and family's financial future."
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
                <FaChartLine className="mr-2" />
                Elevate Wealth
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Lasting Wealth Beyond Your Practice
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your healthcare income into generational wealth. Our Elevate Wealth services help you create multiple income streams, optimize your tax strategy, and build a comprehensive financial plan that secures your family's future.
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial planning and wealth building consultation"
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
              Our Elevate Wealth Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive wealth building solutions designed specifically for healthcare entrepreneurs.
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
            Ready to Build Wealth?
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Let's Elevate Your Wealth Strategy
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-2">
            Schedule your complimentary wealth consultation to discover how our Elevate Wealth services can help you build lasting financial security beyond your practice.
          </p>
          
          <Button 
            onClick={navigateToStartHere}
            className="bg-white text-[#141e5b] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            <span className="hidden sm:inline">Schedule Your Wealth Consultation</span>
            <span className="sm:hidden">Schedule Wealth Session</span>
            <FaCalendarCheck className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-white/70 mt-6">
            ✓ Complimentary consultation • ✓ No obligation • ✓ Proven wealth strategies
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
