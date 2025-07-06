import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
}: PageHeroProps) {
  return (
    <motion.section 
      className="relative overflow-hidden pt-20" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(20, 30, 91, 0.8), rgba(20, 30, 91, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
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
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
