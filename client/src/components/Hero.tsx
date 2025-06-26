import { Button } from "@/components/ui/button";
//import assets Right Image
import RightImage from "@/assets/hero-client.png";
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 136;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section 
      id="home" 
      className="relative overflow-hidden" 
      style={{ paddingTop: '136px', background: 'linear-gradient(135deg, #141e5b 0%, #141e5b 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Wave Shape at Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Helping Healthcare{" "}
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Entrepreneurs{" "}
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Navigate What's{" "}
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 100 }}
              >
                NEXT
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Founded by clinician-turned-entrepreneur John S. Smith Jr., creator of Prestige Healthcare Resources Inc., 
              Your Lifestyle Navigator™ empowers healthcare and behavioral health business owners to achieve business growth, 
              personal wealth, and lasting legacy through our proprietary NEXT Framework™.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 bg-bg-white border-white text-white px-8 py-4 rounded text-lg font-semibold hover:bg-white hover:text-[#141e5b] transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  Book My NEXT Strategy Session
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              <img 
                src={RightImage}
                alt="John S. Smith Jr., RN, BSN - Healthcare Entrepreneur and Financial Expert"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                loading="eager"
                decoding="async"
                width="400"
                height="500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
