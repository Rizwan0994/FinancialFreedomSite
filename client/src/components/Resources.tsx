import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { FaBookOpen, FaToolbox, FaGraduationCap, FaDownload, FaCalendar, FaChevronRight, FaCalendarCheck, FaArrowRight, FaRocket } from 'react-icons/fa';
import { useState } from "react";
import { motion } from 'framer-motion';


export default function Resources() {
  const [, setLocation] = useLocation();
  const [showSchedule, setShowSchedule] = useState(false);

  const navigateToStartHere = () => {
    setLocation("/start-here");
  };

  const navigateToServices = () => {
    setLocation("/services");
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Healthcare Entrepreneurs with the Tools to Grow, Prosper and Leave a Legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Books */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBookOpen className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Books & Guides</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive guides and resources to help you understand the fundamentals of healthcare business growth and wealth building.
            </p>
            <Button
              onClick={() => setLocation("/books")}
              className="bg-[#141e5b] text-white px-4 py-2 rounded-md hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              <FaBookOpen className="mr-2" />
              View Our Books
              <FaChevronRight className="ml-2 text-sm" />
            </Button>
          </div>

          {/* Success Kit */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaToolbox className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Success Kit</h3>
            <p className="text-gray-600 mb-6">
              Essential tools, templates, and checklists to help you implement the NEXT Framework in your own healthcare business.
            </p>
            <Button
              onClick={() => alert("Download coming soon!")}
              variant="outline"
              className="text-[#141e5b] font-semibold inline-flex items-center"
            >
              Download Kit <FaDownload className="ml-2" />
            </Button>
          </div>

          {/* Trainings & Workshops */}
          <div className="bg-white p-8 rounded-lg text-center shadow-sm">
            <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGraduationCap className="text-white text-3xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Trainings & Workshops</h3>
            <p className="text-gray-600 mb-6">
              Interactive training sessions and workshops designed specifically for healthcare entrepreneurs at every stage of growth.
            </p>
            <Button
            onClick={()=>setLocation("/booking")}
              variant="outline"
              className="text-[#141e5b] font-semibold inline-flex items-center"
            >
              View Schedule <FaCalendar className="ml-2" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              <FaRocket className="mr-2 text-yellow-300" />
              Turn Knowledge Into Action
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2"
            >
              Ready to Apply These Resources to Your Business?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-2 leading-relaxed"
            >
              Our resources are just the beginning. Get personalized guidance on implementing these strategies in your unique healthcare business context.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaBookOpen className="text-white text-lg" />
                </div>
                <div className="text-sm md:text-base text-white/80">Proven Strategies</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaToolbox className="text-white text-lg" />
                </div>
                <div className="text-sm md:text-base text-white/80">Practical Tools</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <div className="text-sm md:text-base text-white/80">Expert Guidance</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-lg sm:max-w-none mx-auto"
            >
              <Button 
                onClick={navigateToStartHere}
                className="w-full sm:w-auto bg-white text-[#141e5b] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
              >
                <span className="hidden sm:inline">Get Personalized Strategy</span>
                <span className="sm:hidden">Get Strategy</span>
                <FaCalendarCheck className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={navigateToServices}
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-[#141e5b] transition-colors inline-flex items-center justify-center group bg-transparent"
              >
                <span className="hidden sm:inline">Explore Our Services</span>
                <span className="sm:hidden">Our Services</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-sm text-white/70 mt-6"
            >
              Transform your healthcare expertise into lasting wealth and legacy
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
