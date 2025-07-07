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
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { FaCalendarCheck, FaMapMarkerAlt, FaBullseye, FaSearch, FaRocket, FaHandshake, FaQuoteLeft, FaPhone, FaEnvelope, FaClock, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { updatePageSEO, SEO_DATA } from "@/lib/seo";

export default function StartHere() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
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
    // Update SEO
    const seoData = SEO_DATA.startHere;
    updatePageSEO(seoData.title, seoData.description, seoData.keywords);

    // Get saved scroll position for this page
    const savedScrollPosition = sessionStorage.getItem('startHere-scroll-position');
    
    if (savedScrollPosition) {
      // Restore scroll position after a small delay to ensure page is rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        // Clear the saved position after restoring
        sessionStorage.removeItem('startHere-scroll-position');
      }, 100);
    } else {
      // If no saved scroll position, scroll to the form section automatically
      setTimeout(() => {
        const formSection = document.getElementById('booking-form');
        if (formSection) {
          const offsetTop = formSection.offsetTop - 136; // Account for fixed navigation
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 500); // Increased delay to ensure page is fully loaded
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
      <section className="relative bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] text-white py-24 mt-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            START HERE
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-white/90">
            "Let's Explore What's NEXT for Your Business and Life"
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-white/80 max-w-3xl mx-auto px-4">
            Schedule your complimentary NEXT Strategy Session with Your Lifestyle Navigator™ today.
          </p>
          <Button 
            onClick={scrollToBooking}
            className="bg-white text-[#141e5b] px-6 sm:px-8 lg:px-12 py-4 sm:py-6 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center mx-4"
          >
            <span className="hidden sm:inline">Book My NEXT Strategy Session</span>
            <span className="sm:hidden">Book Strategy Session</span>
            <FaCalendarCheck className="ml-2 sm:ml-3" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Start With a NEXT Strategy Session?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our complimentary Discovery Call is designed to help healthcare entrepreneurs like you gain clarity on your business growth, personal wealth strategy, and legacy goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">In this call, we'll explore:</h3>
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
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">No Pressure Promise</h4>
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
              className="bg-[#141e5b] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              <span className="hidden sm:inline">Book My NEXT Strategy Session</span>
              <span className="sm:hidden">Book Strategy Session</span>
              <FaCalendarCheck className="ml-2 sm:ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What to Expect in Your Discovery Call
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {expectationSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-[#141e5b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
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
              className="bg-[#141e5b] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              <span className="hidden sm:inline">Book My NEXT Strategy Session</span>
              <span className="sm:hidden">Book Strategy Session</span>
              <FaCalendarCheck className="ml-2 sm:ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Schedule Your Discovery Call</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to navigate what's NEXT for your healthcare business and financial future? 
              Fill out the form below and we'll contact you to schedule your complimentary session.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  className="w-full bg-[#141e5b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#141e5b]/90 transition-colors"
                >
                  <span className="hidden sm:inline">Schedule My Discovery Call</span>
                  <span className="sm:hidden">Schedule Call</span>
                  <FaCalendarCheck className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <FaPhone className="text-white text-sm sm:text-base" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                      <p className="text-gray-600 text-sm sm:text-base">+1 202-991-1745</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <FaEnvelope className="text-white text-sm sm:text-base" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                      <p className="text-gray-600 text-sm sm:text-base break-all sm:break-normal">support@yourlifestylenavigator.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#141e5b] rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <FaClock className="text-white text-sm sm:text-base" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real healthcare entrepreneurs who transformed their businesses and lives through the NEXT Framework™
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              const isExpanded = expandedTestimonial === testimonial.id;
              return (
                <div key={testimonial.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Compact Header - Always Visible */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#141e5b] rounded-full flex items-center justify-center flex-shrink-0">
                            <FaQuoteLeft className="text-white text-sm" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-[#141e5b] text-white text-xs font-medium rounded-full mb-3">
                            {testimonial.stage}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {testimonial.wins.slice(0, 2).map((win, index) => (
                              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                ✓ {win}
                              </span>
                            ))}
                            {testimonial.wins.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{testimonial.wins.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quote - Always Visible */}
                        <blockquote className="text-base sm:text-lg italic text-gray-700 leading-relaxed mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="border-t border-gray-200 pt-6 space-y-4">
                        <div>
                          <h4 className="text-md font-semibold text-gray-900 mb-2">Success Story</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {testimonial.story}
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="text-md font-semibold text-gray-900 mb-2">Key Results:</h5>
                          <div className="grid grid-cols-1 gap-2">
                            {testimonial.results.map((result, index) => (
                              <div key={index} className="flex items-start text-gray-700">
                                <FaCheck className="text-green-600 mr-2 mt-1 flex-shrink-0 text-xs" />
                                <span className="text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* All Wins When Expanded */}
                        <div>
                          <h5 className="text-md font-semibold text-gray-900 mb-2">All Achievements:</h5>
                          <div className="flex flex-wrap gap-2">
                            {testimonial.wins.map((win, index) => (
                              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
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
                        className="text-[#141e5b] border-[#141e5b] hover:bg-[#141e5b] hover:text-white transition-colors"
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
          <div className="text-center mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Ready to Write Your Own Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join healthcare entrepreneurs like George and Anne who transformed their businesses and lives.
            </p>
            <Button 
              onClick={scrollToBooking}
              className="bg-[#141e5b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#141e5b]/90 transition-colors inline-flex items-center"
            >
              Start Your Journey Today
              <FaCalendarCheck className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="booking-section" className="py-16 sm:py-20 bg-gradient-to-br from-[#141e5b] via-[#0A1245] to-[#141e5b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-2">
            Are You Ready to Plan What's NEXT?
          </h2>
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-white/90">
              Your business success is just the beginning.
            </p>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
              Let's explore how you can elevate wealth, design your ideal exit, and build a lasting legacy.
            </p>
            <p className="text-base sm:text-lg text-white/80">
              Use the form above to schedule your complimentary NEXT Strategy Session today.
            </p>
          </div>
          
          <Button 
            onClick={scrollToBooking}
            className="bg-white text-[#141e5b] px-6 sm:px-8 lg:px-16 py-4 sm:py-6 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center mx-4"
          >
            <span className="hidden sm:inline"     onClick={() => setLocation("/booking")}>Schedule My Session Now</span>
            <span className="sm:hidden"     onClick={() => setLocation("/booking")}>Schedule Session</span>
            <FaCalendarCheck className="ml-2 sm:ml-3" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}