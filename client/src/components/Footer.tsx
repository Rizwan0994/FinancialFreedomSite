import logo from '../assets/logo-white.jpg';
import { useLocation } from 'wouter';
import { FaLinkedinIn, FaFacebookF, FaAmazon } from 'react-icons/fa';
export default function Footer() {
  const [location, setLocation] = useLocation();
  
  // Function to handle both same-page scrolling and cross-page navigation
  const handleNavigation = (sectionId: string) => {
    if (location === '/') {
      // If already on home page, just scroll to section
      scrollToSection(sectionId);
    } else {
      // If on a different page, navigate to home page first
      setLocation('/');
      // Small delay to ensure page navigation completes before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
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

  const navigateToPage = (path: string) => {
    setLocation(path);
  };

  return (
    <footer className="bg-[#141e5b] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Your Lifestyle Navigator™</h3>
            {/* Logo Image */ }
            <img
              src={logo}
              alt="Your Lifestyle Navigator Logo"
              className="h-16 w-auto mb-4"
              loading="lazy"
              decoding="async"
              width="64"
              height="64"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering healthcare and behavioral health entrepreneurs to achieve business growth, 
              personal wealth, and lasting legacy through our proprietary NEXT Framework™.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/your-lifestyle-navigator%E2%84%A2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center hover:bg-[#0077b5]/90 transition-colors"
                aria-label="LinkedIn Profile"
              >
             <FaLinkedinIn className="text-white" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61577297356709&sk=followers&notif_ids[0]=100010260252536&notif_ids[1]=100001513865544&notif_ids[2]=100008704626934&notif_ids[3]=100003259358405&notif_ids[4]=100000942233434&notif_ids[5]=100006072041754&notif_ids[6]=100003457792458&notif_ids[7]=100000234161887&notif_ids[8]=100001669985587&notif_ids[9]=100061615733704&notif_id=1750774751498660&notif_t=follow_profile&ref=notif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center hover:bg-[#1877f2]/90 transition-colors"
                aria-label="Facebook Profile"
              >
               <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://www.amazon.com/stores/John-S.-Smith-Jr.-RN/author/B0C66RX7JD?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff9900] rounded-full flex items-center justify-center hover:bg-[#ff9900]/90 transition-colors"
                aria-label="Amazon Author Page"
              >
               <FaAmazon className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavigation("about")} 
                  className="hover:text-white transition-colors text-left"
                >
                  About John
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("next-framework")} 
                  className="hover:text-white transition-colors text-left"
                >
                  NEXT Framework
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("resources")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("contact")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Start Here
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage("/faq")} 
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>202-866-2372</li>
              <li>support@yourlifestylenavigator.com</li>
              <li>
                <button 
                  onClick={() => handleNavigation("contact")} 
                  className="text-[#141e5b] hover:text-[#141e5b]/80 transition-colors font-semibold"
                >
                  Schedule Discovery Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Your Lifestyle Navigator™. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
