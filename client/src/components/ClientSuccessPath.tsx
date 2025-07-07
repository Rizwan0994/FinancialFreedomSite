import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import disscoveryCall from "@/assets/call.png";
import nextFrameWork from "@/assets/framework.png";
import successCall from "@/assets/success.png";
import partnership from "@/assets/Implementation-Partnership.png";
import assessment from "@/assets/Comprehensive-assessment.png";
import optimization from "@/assets/Ongoing-Optimization.png";
import headshot from "@/assets/headshot.png";
import { FaPhone, FaQuoteLeft, FaCheck, FaChevronDown, FaChevronUp, FaCalendarCheck } from 'react-icons/fa';
import { useLocation } from "wouter";
export default function ClientSuccessPath() {
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
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#141e5b]/10 rounded-full text-[#141e5b] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FaPhone className="mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">Client Success Path</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              How We Work with You: A Clear, Transparent Process
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#141e5b] to-gray-300 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Large Image-First Design */}
        <div className="space-y-12 sm:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Step Container */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}>
                
                {/* Large Image - Takes Priority */}
                <div className="w-full lg:w-3/5 xl:w-2/3">
                  <div className="relative group">
                    {/* Step Number Overlay */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#141e5b] text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Main Image - Large and Prominent */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                      <img
                        src={step.image}
                        alt={`${step.title} - Complete process visualization`}
                        className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                          step.title === "Comprehensive Assessment" 
                            ? "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] object-contain bg-gray-50" 
                            : "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                        }`}
                        loading={index <= 1 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      {/* Subtle overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Optional: Add a "zoom" indicator */}
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#141e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content - Secondary but Important */}
                <div className="w-full lg:w-2/5 xl:w-1/3 space-y-4 sm:space-y-6 px-2 sm:px-0">
                  <div>
                    {/* Step Badge */}
                    <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#141e5b]/10 rounded-full text-[#141e5b] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                      <span className="mr-2">Step {step.number}</span>
                      <div className="w-2 h-2 bg-[#141e5b] rounded-full"></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <span>Process Progress</span>
                      <span>{Math.round(((index + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#141e5b] to-[#1a2570] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Optional CTA for specific steps */}
                  {index === 0 && (
                    <Button
                      onClick={scrollToBooking}
                      className="bg-[#141e5b] text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#1a2570] transition-colors inline-flex items-center w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <span className="hidden sm:inline">Start with Discovery Call</span>
                      <span className="sm:hidden">Start Discovery</span>
                      <FaPhone className="ml-2" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8 sm:mt-12 mb-3 sm:mb-4">
                  <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-[#141e5b] to-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Ready to Begin Your Journey?</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Let's map what's NEXT for your business and your life.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg md:text-xl font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <span className="hidden sm:inline">Schedule Your Discovery Call</span>
            <span className="sm:hidden">Book Discovery Call</span>
            <FaPhone className="ml-2 md:ml-3" />
          </Button>
        </div>

        {/* Client Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden mx-2 sm:mx-0"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10 rounded-xl sm:rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
          
          <div className="relative">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white px-2">
                Client Success Stories
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-2">
                Real healthcare entrepreneurs who transformed their businesses and lives through the NEXT Framework™
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => {
                const isExpanded = expandedTestimonial === testimonial.id;
                return (
                  <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Compact Header - Always Visible */}
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaQuoteLeft className="text-white text-xs sm:text-sm" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{testimonial.name}</h3>
                              <p className="text-xs sm:text-sm text-white/70">{testimonial.location}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-3">
                              {testimonial.stage}
                            </span>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
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
                          <blockquote className="text-sm sm:text-base md:text-lg italic text-white/90 leading-relaxed mb-4">
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
                className="bg-white text-[#141e5b] px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <span className="hidden sm:inline">Start Your Journey Today</span>
                <span className="sm:hidden">Start Journey</span>
                <FaCalendarCheck className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
