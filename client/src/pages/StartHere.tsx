import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { FaCalendarCheck, FaMapMarkerAlt, FaBullseye, FaSearch, FaRocket, FaHandshake, FaQuoteLeft, FaPhone, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';

export default function StartHere() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    currentStage: "",
    message: "",
  });

  // Preserve scroll position when component mounts
  useEffect(() => {
    // Get saved scroll position for this page
    const savedScrollPosition = sessionStorage.getItem('startHere-scroll-position');
    
    if (savedScrollPosition) {
      // Restore scroll position after a small delay to ensure page is rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        // Clear the saved position after restoring
        sessionStorage.removeItem('startHere-scroll-position');
      }, 100);
    }

    // Save scroll position when user leaves the page
    const saveScrollPosition = () => {
      sessionStorage.setItem('startHere-scroll-position', window.scrollY.toString());
    };

    // Save scroll position on various events to handle SPA navigation
    window.addEventListener('beforeunload', saveScrollPosition); // Page refresh/close
    
    // Save scroll position periodically during scrolling (throttled)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(saveScrollPosition, 150); // Throttle to avoid excessive saves
    };
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      // Save scroll position when component unmounts (SPA navigation)
      saveScrollPosition();
    };
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://0bd.44a.myftpupload.com/wp-json/ghl/v1/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Success!",
          description: "Your Discovery Call request has been submitted. We'll contact you soon!",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          businessType: "",
          currentStage: "",
          message: "",
        });
      } else {
        console.log("error", result?.error);
        throw new Error(result?.error || "Unknown error");
      }
    } catch (error: any) {
      console.log("error", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            onClick={scrollToBooking}
            className="bg-white text-[#141e5b] px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book My NEXT Strategy Session
            <FaCalendarCheck className="ml-3" />
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
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 text-lg">Where are you in your business and wealth journey</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <FaBullseye className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 text-lg">Your goals for growth, wealth building, exit, and legacy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <FaSearch className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 text-lg">The gaps and opportunities in your current strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <FaRocket className="text-white text-sm" />
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
                <FaHandshake className="text-white text-2xl" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToBooking}
              className="bg-[#141e5b] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              Book My NEXT Strategy Session
              <FaCalendarCheck className="ml-3" />
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
              onClick={scrollToBooking}
              className="bg-[#141e5b] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              Book My NEXT Strategy Session
              <FaCalendarCheck className="ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Discovery Call</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to navigate what's NEXT for your healthcare business and financial future? 
              Fill out the form below and we'll contact you to schedule your complimentary session.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input
                      id="first-name"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input
                      id="last-name"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="business-type">Type of Healthcare Business</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-practice">Private Practice</SelectItem>
                      <SelectItem value="clinic">Clinic/Healthcare Business</SelectItem>
                      <SelectItem value="behavioral-health">Behavioral Health</SelectItem>
                      <SelectItem value="healthcare-exec">Healthcare Executive/Consultant</SelectItem>
                      <SelectItem value="healthtech">Healthcare Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="current-stage">Current Business Stage</Label>
                  <Select value={formData.currentStage} onValueChange={(value) => handleInputChange("currentStage", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your current stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Starting/Early Stage</SelectItem>
                      <SelectItem value="growth">Growth Phase</SelectItem>
                      <SelectItem value="established">Established/Scaling</SelectItem>
                      <SelectItem value="exit-planning">Planning Exit</SelectItem>
                      <SelectItem value="legacy-focus">Legacy Building</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">What are your biggest challenges or goals?</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your current situation and what you'd like to achieve..."
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#141e5b] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors"
                >
                  Schedule My Discovery Call
                  <FaCalendarCheck className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">202-866-2372</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">support@yourlifestylenavigator.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-4">What to Expect from Your Discovery Call:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheck className="text-[#141e5b] mt-1 mr-3 flex-shrink-0" />
                    <span>30-minute complimentary consultation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#141e5b] mt-1 mr-3 flex-shrink-0" />
                    <span>Assessment of your current business and financial situation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#141e5b] mt-1 mr-3 flex-shrink-0" />
                    <span>Discussion of your goals and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#141e5b] mt-1 mr-3 flex-shrink-0" />
                    <span>Overview of how the NEXT Framework can help</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#141e5b] mt-1 mr-3 flex-shrink-0" />
                    <span>Next steps for your journey to financial freedom</span>
                  </li>
                </ul>
              </div>
            </div>
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
                  <FaQuoteLeft className="text-white text-xl" />
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
              Use the form above to schedule your complimentary NEXT Strategy Session today.
            </p>
          </div>
          
          <Button 
            onClick={scrollToBooking}
            className="bg-white text-[#141e5b] px-16 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Schedule My Session Now
            <FaCalendarCheck className="ml-3" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}