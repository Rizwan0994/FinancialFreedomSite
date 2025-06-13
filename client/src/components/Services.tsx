import { Button } from "@/components/ui/button";

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
      icon: "fas fa-compass",
      title: "Navigate Business Growth",
      items: [
        "Business growth coaching & strategy",
        "Practice valuation & optimization",
        "Personal brand development",
        "M&A readiness & business acquisition consulting"
      ]
    },
    {
      icon: "fas fa-chart-line",
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
      icon: "fas fa-door-open",
      title: "eXit Strategy",
      items: [
        "Business exit planning & succession coaching",
        "Funded buy-sell agreements",
        "Business continuity protection",
        "Data room preparation & founder transition coaching"
      ]
    },
    {
      icon: "fas fa-tree",
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
      icon: "fas fa-chart-line",
      title: "Elevate Wealth",
      description: "Use advanced life insurance strategies to build tax-efficient savings and protect your wealth."
    },
    {
      icon: "fas fa-tree",
      title: "Transfer Legacy",
      description: "Leverage insurance for legacy creation and seamless transition of wealth or business ownership."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Navigate & eXit",
      description: "Protect your business continuity with disability coverage and funded buy-sell arrangements."
    }
  ];

  const clientTypes = [
    { icon: "fas fa-clinic-medical", label: "Private Practice Owners" },
    { icon: "fas fa-hospital", label: "Clinic & Healthcare Business Owners" },
    { icon: "fas fa-brain", label: "Behavioral Health Entrepreneurs" },
    { icon: "fas fa-user-tie", label: "Healthcare Executives & Consultants" },
    { icon: "fas fa-laptop-medical", label: "Healthcare Technology Founders" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How We Help You Navigate Business Growth, Build Wealth, and Leave a Legacy
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="fas fa-check text-[#141e5b] mt-1 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            {insuranceSolutions.map((solution, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${solution.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Who We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {clientTypes.map((client, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <i className={`${client.icon} text-[#141e5b] text-2xl mb-2`}></i>
                <p className="text-sm font-medium text-gray-900">{client.label}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
          >
            Book Discovery Call
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
