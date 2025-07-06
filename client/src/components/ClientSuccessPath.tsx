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
import { FaPhone, FaTimes, FaQuoteLeft, FaCheck, FaChevronDown, FaChevronUp, FaCalendarCheck } from 'react-icons/fa';
import { useLocation } from "wouter";
export default function ClientSuccessPath() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  const scrollToBooking = () => {
    setLocation("/start-here");
  };

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

  const toggleTestimonial = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  const testimonials = [
    {
      id: 1,
      name: "George Doga",
      location: "Ontario, Canada",
      stage: "Concept → Ascend",
      wins: ["Business Launch", "Mindset Shift", "Financial Independence"],
      quote: "John's guidance helped me realize that I was building someone else's dream. Now, I wake up every day building my own.",
      story: "George was a seasoned healthcare worker in Canada, burnt out from years of overwork and feeling stuck in a system that didn't reward his ambition. After reading Freedom at Last! and receiving direct mentorship from John S. Smith Jr., he made the bold decision to resign from his job and pursue his dream of entrepreneurship.",
      results: [
        "Launched his own healthcare consulting business",
        "Built a clear roadmap for income diversification", 
        "Gained confidence through purpose-based planning and mindset coaching",
        "Now serves as an advocate for others seeking freedom through business"
      ]
    },
    {
      id: 2,
      name: "Anne Balili",
      location: "United States",
      stage: "Concept → Realize", 
      wins: ["Practice Launch", "Overcoming Fear", "Personal Fulfillment"],
      quote: "John didn't just give me a plan—he gave me permission to move forward. I feel like I've finally come alive.",
      story: "For over a decade, Anne dreamed of opening her own practice—but fear, analysis paralysis, and lack of direction kept her stuck. After connecting with John and participating in the Your Lifestyle Navigator process, she shifted her mindset, overcame years of hesitation, and finally launched her behavioral health practice.",
      results: [
        "Successfully opened her own private practice after 10+ years of delay",
        "Developed a strong niche and vision-led brand",
        "Gained control over her time and professional identity",
        "Serving clients in a way that reflects her core values and calling"
      ]
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Path</h2>
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
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
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
                        // style={{ minHeight: '150px', maxHeight: '200px' }}
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
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
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

        {/* Client Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Client Success Stories
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Real healthcare entrepreneurs who transformed their businesses and lives through the NEXT Framework™
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => {
                const isExpanded = expandedTestimonial === testimonial.id;
                return (
                  <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Compact Header - Always Visible */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaQuoteLeft className="text-white text-sm" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-white">{testimonial.name}</h3>
                              <p className="text-sm text-white/70">{testimonial.location}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
                              {testimonial.stage}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {testimonial.wins.slice(0, 2).map((win, index) => (
                                <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">
                                  ✓ {win}
                                </span>
                              ))}
                              {testimonial.wins.length > 2 && (
                                <span className="px-2 py-1 bg-white/10 text-white/60 text-xs font-medium rounded-full">
                                  +{testimonial.wins.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quote - Always Visible */}
                          <blockquote className="text-base sm:text-lg italic text-white/90 leading-relaxed mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      {isExpanded && (
                        <div className="border-t border-white/20 pt-6 space-y-4">
                          <div>
                            <h4 className="text-md font-semibold text-white mb-2">Success Story</h4>
                            <p className="text-sm text-white/80 leading-relaxed">
                              {testimonial.story}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-md font-semibold text-white mb-2">Key Results:</h5>
                            <div className="grid grid-cols-1 gap-2">
                              {testimonial.results.map((result, index) => (
                                <div key={index} className="flex items-start text-white/80">
                                  <FaCheck className="text-green-400 mr-2 mt-1 flex-shrink-0 text-xs" />
                                  <span className="text-sm">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* All Wins When Expanded */}
                          <div>
                            <h5 className="text-md font-semibold text-white mb-2">All Achievements:</h5>
                            <div className="flex flex-wrap gap-2">
                              {testimonial.wins.map((win, index) => (
                                <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">
                                  ✓ {win}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Toggle Button */}
                      <div className="flex justify-center mt-6">
                        <Button
                          onClick={() => toggleTestimonial(testimonial.id)}
                          variant="outline"
                          size="sm"
                          className="text-white border-white/30 hover:bg-white/10 hover:text-white transition-colors bg-transparent"
                        >
                          {isExpanded ? (
                            <>
                              <span className="mr-2">Show Less</span>
                              <FaChevronUp className="text-xs" />
                            </>
                          ) : (
                            <>
                              <span className="mr-2">Read Full Story</span>
                              <FaChevronDown className="text-xs" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Below Testimonials */}
            <div className="text-center mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Ready to Write Your Own Success Story?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join healthcare entrepreneurs like George and Anne who transformed their businesses and lives.
              </p>
              <Button 
                onClick={scrollToBooking}
                className="bg-white text-[#141e5b] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Start Your Journey Today
                <FaCalendarCheck className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

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
