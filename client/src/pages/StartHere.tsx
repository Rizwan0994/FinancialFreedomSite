import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

export default function StartHere() {
  const [, setLocation] = useLocation();

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    // Navigate to home page first
    setLocation("/");
    // Wait for navigation to complete, then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 136;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const testimonials = [
    "The Discovery Call helped me see exactly what was missing in my business and wealth strategy.",
    "In one call, John helped me think differently about legacy planning — and how my business could serve my life.",
    "After our Discovery Call, I knew I had found the right guide for this next phase of my journey."
  ];

  const expectationSteps = [
    {
      step: "1",
      title: "Schedule Your Call",
      description: "You schedule your call at a convenient time"
    },
    {
      step: "2", 
      title: "Meet via Zoom",
      description: "We'll meet for 30–45 minutes via Zoom"
    },
    {
      step: "3",
      title: "Gain Clarity",
      description: "You'll gain clarity on your path forward"
    },
    {
      step: "4",
      title: "Explore Partnership",
      description: "If there's a fit, we'll discuss how we can work together"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] text-white py-24 mt-[136px]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            START HERE
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            "Let's Explore What's NEXT for Your Business and Life"
          </h2>
          <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            Schedule your complimentary NEXT Strategy Session with Your Lifestyle Navigator™ today.
          </p>
          <Button 
            onClick={navigateToContact}
            className="bg-white text-[#141e5b] px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book My NEXT Strategy Session
            <i className="fas fa-calendar-check ml-3"></i>
          </Button>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" fill="white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Why Book a Discovery Call Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Start With a NEXT Strategy Session?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our complimentary Discovery Call is designed to help healthcare entrepreneurs like you gain clarity on your business growth, personal wealth strategy, and legacy goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">In this call, we'll explore:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-lg">Where are you in your business and wealth journey</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-bullseye text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-lg">Your goals for growth, wealth building, exit, and legacy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-search text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-lg">The gaps and opportunities in your current strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-rocket text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 text-lg">How the NEXT Framework™ can help you achieve lasting success</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">No Pressure Promise</h4>
              <p className="text-gray-600 mb-6">
                No obligation. No hard sell. Just a meaningful conversation about your NEXT steps.
              </p>
              <div className="w-16 h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={navigateToContact}
              className="bg-[#141e5b] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              Book My NEXT Strategy Session
              <i className="fas fa-calendar-check ml-3"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What to Expect in Your Discovery Call
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {expectationSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < expectationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-[#141e5b]"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={navigateToContact}
              className="bg-[#141e5b] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              Book My NEXT Strategy Session
              <i className="fas fa-calendar-check ml-3"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What Clients Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-quote-left text-white text-xl"></i>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="booking-section" className="py-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Are You Ready to Plan What's NEXT?
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl mb-6 text-white/90">
              Your business success is just the beginning.
            </p>
            <p className="text-xl mb-8 text-white/90">
              Let's explore how you can elevate wealth, design your ideal exit, and build a lasting legacy.
            </p>
            <p className="text-lg text-white/80">
              Schedule your complimentary NEXT Strategy Session today.
            </p>
          </div>
          
          <Button 
            onClick={navigateToContact}
            className="bg-white text-[#141e5b] px-16 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book My NEXT Strategy Session
            <i className="fas fa-calendar-check ml-3"></i>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}