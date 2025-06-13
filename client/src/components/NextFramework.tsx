import { Button } from "@/components/ui/button";

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
      icon: "fas fa-compass",
      title: "Navigate Business Growth",
      description: "Scale your practice with confidence through strategic planning and growth optimization."
    },
    {
      icon: "fas fa-chart-line",
      title: "Elevate Wealth",
      description: "Build personal wealth through strategic planning and advanced insurance solutions."
    },
    {
      icon: "fas fa-door-open",
      title: "eXit Strategy",
      description: "Design an exit plan that honors your mission and maximizes value."
    },
    {
      icon: "fas fa-tree",
      title: "Transfer Legacy",
      description: "Create an enduring impact for your family and your community."
    }
  ];

  return (
    <section id="next-framework" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The NEXT Framework™</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The heart of how we serve healthcare and behavioral health entrepreneurs. Whether you're launching a new clinic, 
            scaling your practice, preparing for a future exit, or building generational wealth — our NEXT approach provides a clear, actionable path.
          </p>
        </div>

        {/* NEXT Framework Visual */}
        <div className="flex justify-center mb-16">
          <div className="relative w-96 h-96">
            {/* Circular Framework Diagram */}
            <div className="absolute inset-0 border-8 border-[#141e5b] rounded-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#141e5b]">The NEXT</h3>
                <p className="text-lg text-gray-700">Framework™</p>
              </div>
            </div>
            
            {/* N - Navigate */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#141e5b] text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
              N
            </div>
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-semibold text-gray-900">Navigate</p>
              <p className="text-sm text-gray-600">Business Growth</p>
            </div>

            {/* E - Elevate */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#141e5b] text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
              E
            </div>
            <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 text-center">
              <p className="font-semibold text-gray-900">Elevate</p>
              <p className="text-sm text-gray-600">Wealth</p>
            </div>

            {/* X - eXit */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#141e5b] text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
              X
            </div>
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-semibold text-gray-900">eXit</p>
              <p className="text-sm text-gray-600">Strategy</p>
            </div>

            {/* T - Transfer */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[#141e5b] text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
              T
            </div>
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 text-center">
              <p className="font-semibold text-gray-900">Transfer</p>
              <p className="text-sm text-gray-600">Legacy</p>
            </div>
          </div>
        </div>

        {/* Framework Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {frameworkItems.map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Plan What's NEXT?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Schedule your complimentary NEXT Strategy Session today, and let's chart your path to business growth, wealth, and legacy.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
          >
            Book My NEXT Strategy Session
            <i className="fas fa-calendar-check ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
