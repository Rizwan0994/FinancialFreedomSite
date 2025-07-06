import { useEffect } from "react";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaCheck } from 'react-icons/fa';
import { useLocation } from "wouter";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function Booking() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Check if script is already loaded to avoid duplicates
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    // Set document title
    document.title = "Book Your NEXT Strategy Session - Your Lifestyle Navigator™";

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const goBack = () => {
    setLocation("/")
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={goBack}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              <span className="text-sm">Back</span>
            </button>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#141e5b] rounded-full flex items-center justify-center mr-3">
                <FaCalendarAlt className="text-white text-sm" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Book Your NEXT Strategy Session
              </h1>
            </div>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar - Session Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What You'll Get
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">30-minute complimentary consultation</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Assessment of your current business situation</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Discussion of your goals and challenges</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Overview of the NEXT Framework™</span>
                </div>
                <div className="flex items-start">
                  <FaCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Next steps for your journey</span>
                </div>
              </div>

              {/* Session Details */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Session Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaClock className="text-[#141e5b] mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Duration</p>
                      <p className="text-xs text-gray-600">30-45 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaCheck className="text-green-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cost</p>
                      <p className="text-xs text-gray-600">Completely FREE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Format</p>
                      <p className="text-xs text-gray-600">Virtual via Zoom</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-2">
                  <a 
                    href="tel:202-866-2372"
                    className="block text-sm text-gray-600 hover:text-[#141e5b] transition-colors"
                  >
                    📞 202-866-2372
                  </a>
                  <a 
                    href="mailto:support@yourlifestylenavigator.com"
                    className="block text-sm text-gray-600 hover:text-[#141e5b] transition-colors"
                  >
                    ✉️ support@yourlifestylenavigator.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calendar Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Choose Your Preferred Time
                </h2>
                <p className="text-gray-600">
                  Select a convenient time slot for your complimentary NEXT Strategy Session
                </p>
              </div>
              
              {/* Full-width Calendar Iframe */}
              <div className="w-full" style={{ minHeight: '700px' }}>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/VrZxJK7ZdP1EWBJ8aWnc" 
                  className="w-full border-0"
                  style={{ 
                    height: '700px',
                    minHeight: '600px'
                  }} 
                  scrolling="auto" 
                  id="booking_calendar_fullpage"
                  title="Book Your NEXT Strategy Session Calendar"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2024 Your Lifestyle Navigator™ - Empowering Healthcare Entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
