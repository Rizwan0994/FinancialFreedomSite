import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import disscoveryCall from "@/assets/call.png";
import nextFrameWork from "@/assets/framework.png";
import successCall from "@/assets/success.png";
import partnership from "@/assets/Implementation-Partnership.png";
import assessment from "@/assets/Comprehensive-assessment.png";

import optimization from "@/assets/Ongoing-Optimization.png";
import headshot from "@/assets/headshot.png";
import { FaPhone, FaTimes } from 'react-icons/fa';
export default function ClientSuccessPath() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

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

  const openImageModal = (image: string, title: string) => {
    setSelectedImage({ src: image, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We start with a complimentary 30-minute call to understand your goals, challenges, and where you are in your business and financial journey.",
      image: disscoveryCall
    },
    {
      number: "2",
      title: "Comprehensive Assessment",
      description: "Next, we conduct a deep-dive evaluation of your business, personal finances, and legacy aspirations — creating a clear picture of your current state and future possibilities.",
      image: assessment
    },
    {
      number: "3",
      title: "NEXT Roadmap Planning",
      description: "We develop your personalized NEXT Roadmap — a cohesive strategy that connects your business growth, personal wealth building, exit planning, and legacy creation.",
      image: nextFrameWork
    },
    {
      number: "4",
      title: "Implementation Partnership",
      description: "Together, we implement your roadmap — providing expert guidance and ongoing support across your NEXT journey. This may include business consulting, financial planning, strategic insurance solutions, and more.",
      image: partnership
    },
    {
      number: "5",
      title: "Ongoing Optimization",
      description: "Your needs will evolve — and so will your plan. Through regular reviews and refinement, we ensure your strategy stays aligned with your vision and the changing healthcare landscape.",
      image: optimization
    }
  ];

  return (
    <section id="client-success" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How We Work with You: A Clear, Transparent Process
          </p>
        </div>

        {/* Success Path Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center lg:items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-4 text-center lg:text-right' : 'lg:pl-4 text-center lg:text-left'} mb-4 lg:mb-0`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-[#141e5b] text-white rounded-full text-lg font-bold mb-3 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-4' : 'lg:pr-4'}`}>
                  <motion.div 
                    className="w-full max-w-xs mx-auto cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    onClick={() => openImageModal(step.image, step.title)}
                  >
                    <div className="bg-white rounded-lg shadow-md p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <motion.img 
                        src={step.image}
                        alt={`${step.title} visualization`}
                        className="w-full h-auto object-contain rounded-md"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                        style={{ minHeight: '150px', maxHeight: '200px' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20 
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Let's map what's NEXT for your business and your life.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
          >
            Schedule Your Discovery Call
            <FaPhone className="ml-2" />
          </Button>
        </div>

        {/* Image Modal/Pop-out */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-auto"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <FaTimes className="text-gray-600" />
                </button>
                
                {/* <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                </div> */}
                
                <div className="flex justify-center">
                  <img
                    src={selectedImage.src}
                    alt={`${selectedImage.title} - enlarged view`}
                    className="max-w-full h-auto object-contain rounded-lg"
                    style={{ maxHeight: '70vh' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
