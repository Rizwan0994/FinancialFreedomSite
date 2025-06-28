import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaCompass, FaChartLine, FaDoorOpen, FaTree, FaShieldAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function Services() {
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

  const services = [
    {
      icon: FaCompass,
      title: "Navigate Business Growth",
      items: [
        "Business growth coaching & strategy",
        "Practice valuation & optimization",
        "Personal brand development",
        "M&A readiness & business acquisition consulting"
      ]
    },
    {
      icon: FaChartLine,
      title: "Elevate Wealth",
      items: [
        "Advanced financial planning",
        "Wealth building strategies",
        "Tax optimization",
        "Investment planning",
        "Strategic insurance solutions (life, disability, business protection)"
      ]
    },
    {
      icon: FaDoorOpen,
      title: "eXit Strategy",
      items: [
        "Business exit planning & succession coaching",
        "Funded buy-sell agreements",
        "Business continuity protection",
        "Data room preparation & founder transition coaching"
      ]
    },
    {
      icon: FaTree,
      title: "Transfer Legacy",
      items: [
        "Legacy creation & wealth transfer strategies",
        "Life insurance-based estate planning",
        "Charitable giving & philanthropy planning",
        "Family wealth education & governance"
      ]
    }
  ];

  const insuranceSolutions = [
    {
      icon: FaChartLine,
      title: "Elevate Wealth",
      description: "Use advanced life insurance strategies to build tax-efficient savings and protect your wealth."
    },
    {
      icon: FaTree,
      title: "Transfer Legacy",
      description: "Leverage insurance for legacy creation and seamless transition of wealth or business ownership."
    },
    {
      icon: FaShieldAlt,
      title: "Navigate & eXit",
      description: "Protect your business continuity with disability coverage and funded buy-sell arrangements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#141e5b]/8 via-[#141e5b]/4 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            How We Help You Navigate Business Growth, Build Wealth, and Leave a Legacy
          </p>
          
          {/* Services Hero Image */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=400&q=80"
                alt="Healthcare professionals in consultation - representing our comprehensive services"
                className="w-full h-auto object-cover rounded-xl shadow-md border-2 border-[#141e5b]/20 hover:border-[#141e5b]/40 transition-colors duration-300 bg-white/50"
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: '500/400' }}
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#141e5b]/5 via-[#141e5b]/10 to-[#141e5b]/5 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our comprehensive approach covers every aspect of your entrepreneurial journey. Click on each service area below to explore how we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Services Accordion */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Accordion key={index} type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 hover:no-underline group">
                      <div className="flex items-center w-full">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#141e5b] to-[#1a2b6b] rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                          <IconComponent className="text-white text-sm sm:text-lg lg:text-xl" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#141e5b] transition-colors duration-300 leading-tight">{service.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Click to explore our offerings</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                      <div className="pt-4 bg-gradient-to-r from-gray-50/50 to-[#141e5b]/5 rounded-lg p-4 sm:p-6 ml-0 sm:ml-8 lg:ml-20">
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start group">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#141e5b] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                                <FaCheck className="text-white text-xs" />
                              </div>
                              <span className="text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>

        {/* Insurance Solutions */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Insurance Solutions That Empower Your NEXT Journey
          </h3>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            At Your Lifestyle Navigator, we believe insurance should be a strategic asset, not just a product. 
            That's why we integrate tailored insurance solutions throughout your NEXT roadmap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insuranceSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                  <p className="text-sm text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
