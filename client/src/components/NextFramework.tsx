import { Button } from "@/components/ui/button";
import { FaCompass, FaChartLine, FaDoorOpen, FaTree, FaCalendarCheck } from 'react-icons/fa';
import nextFrameWork from "@/assets/framework.png";

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
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <img 
              src={nextFrameWork}
              alt="NEXT Framework - Navigate, Elevate, eXit, Transfer"
              className="w-full h-auto object-contain rounded-lg shadow-none"
              loading="lazy"
              decoding="async"
            />
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
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Plan What's NEXT?</h3>
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