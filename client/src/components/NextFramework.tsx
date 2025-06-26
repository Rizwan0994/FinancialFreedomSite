import { Button } from "@/components/ui/button";
import { FaCompass, FaChartLine, FaDoorOpen, FaTree, FaCalendarCheck } from 'react-icons/fa';

export default function NextFramework() {
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

  const frameworkItems = [
    {
      icon: FaCompass,
      title: "Navigate Business Growth",
      description: "Scale your practice with confidence through strategic planning and growth optimization."
    },
    {
      icon: FaChartLine,
      title: "Elevate Wealth",
      description: "Build personal wealth through strategic planning and advanced insurance solutions."
    },
    {
      icon: FaDoorOpen,
      title: "eXit Strategy",
      description: "Design an exit plan that honors your mission and maximizes value."
    },
    {
      icon: FaTree,
      title: "Transfer Legacy",
      description: "Create an enduring impact for your family and your community."
    }
  ];

  return (
    <section id="next-framework" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">The NEXT Framework™</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The heart of how we serve healthcare and behavioral health entrepreneurs. Whether you're launching a new clinic, 
            scaling your practice, preparing for a future exit, or building generational wealth — our NEXT approach provides a clear, actionable path.
          </p>
        </div>

        {/* NEXT Framework Visual */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Circular Framework Diagram */}
            <div className="absolute inset-0 border-4 sm:border-6 md:border-8 border-[#141e5b] rounded-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#141e5b]">The NEXT</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Framework™</p>
              </div>
            </div>
            
            {/* N - Navigate */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-[#141e5b] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
              N
            </div>
            <div className="absolute -top-12 sm:-top-14 md:-top-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Navigate</p>
              <p className="text-xs sm:text-sm text-gray-600">Business Growth</p>
            </div>

            {/* E - Elevate */}
            <div className="absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2 bg-[#141e5b] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
              E
            </div>
            <div className="absolute top-1/2 -right-16 sm:-right-18 md:-right-20 transform -translate-y-1/2 text-center">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Elevate</p>
              <p className="text-xs sm:text-sm text-gray-600">Wealth</p>
            </div>

            {/* X - eXit */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-[#141e5b] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
              X
            </div>
            <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">eXit</p>
              <p className="text-xs sm:text-sm text-gray-600">Strategy</p>
            </div>

            {/* T - Transfer */}
            <div className="absolute top-1/2 -left-3 sm:-left-4 transform -translate-y-1/2 bg-[#141e5b] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
              T
            </div>
            <div className="absolute top-1/2 -left-16 sm:-left-18 md:-left-20 transform -translate-y-1/2 text-center">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Transfer</p>
              <p className="text-xs sm:text-sm text-gray-600">Legacy</p>
            </div>
          </div>
        </div>

        {/* Framework Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {frameworkItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-lg sm:text-2xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Plan What's NEXT?</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Schedule your complimentary NEXT Strategy Session today, and let's chart your path to business growth, wealth, and legacy.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
          >
            <span className="hidden sm:inline">Book My NEXT Strategy Session</span>
            <span className="sm:hidden">Book Strategy Session</span>
            <FaCalendarCheck className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}